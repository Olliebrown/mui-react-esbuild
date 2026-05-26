// esbuild.config.js
import fs from 'fs'
import * as esbuild from 'esbuild'

// Check for command line options
const _DEV_ = process.argv.includes('dev')
const _SERVE_ = process.argv.includes('serve')

// Script to auto refresh when eslint rebuilds (using server sent events)
const AUTO_REFRESH = {
  js: "new EventSource('/esbuild').addEventListener('change', () => location.reload());"
}

// Check for SSL certificate
let ENABLE_SSL = true
try {
  fs.accessSync('./ssl_certs/server.crt')
  fs.statSync('./ssl_certs/server.key')
} catch (err) {
  ENABLE_SSL = false
}

// Create a context for the build
const ctx = await esbuild.context({
  entryPoints: ['./client/main.jsx'],
  bundle: true,
  target: 'es6',
  sourcemap: _DEV_,
  minify: !_DEV_,
  define: {
    'process.env.NODE_ENV': (_DEV_ ? '"development"' : '"production"'),
  },
  inject: ['./client/react_shim.js'],
  loader: {
    '.svg': 'dataurl',
    '.woff': 'dataurl',
    '.woff2': 'dataurl'
  },
  banner: (_DEV_ ? AUTO_REFRESH : {}),
  outdir: 'public',

  // Plugin to output on rebuilds
  plugins: [
    {
      name: 'rebuild-notify',
      setup (build) {
        build.onStart(() => {
          console.log('Rebuild started...')
        })
        build.onEnd((result) => {
          console.log(`Build finished with ${result.warnings.length} warning(s) and ${result.errors.length} error(s).`)
        })
      },
    },
  ],
})

if (_DEV_) {
  // When in dev, enable watch mode
  await ctx.watch()

  // Start the development server if requestd
  if (_SERVE_) {
    const { hosts, port } = await ctx.serve({
      port: 3000,
      servedir: 'public',
      fallback: 'public/index.html',
      keyfile: (ENABLE_SSL ? './ssl_certs/server.key' : undefined),
      certfile: (ENABLE_SSL ? './ssl_certs/server.crt' : undefined)
    })

    console.log('Server running at:')
    hosts.forEach((host) => console.log(`  - http${ENABLE_SSL ? 's' : ''}://${host}:${port}`))
  }

  console.log('Watching for changes ...')
} else {
  // Build once and dispose
  await ctx.rebuild()
  await ctx.dispose()
}

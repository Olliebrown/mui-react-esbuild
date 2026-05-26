import { Typography } from '@mui/material'

function HomePage () {
  return (
    <>
      <Typography variant='h3' component='h1' sx={{ mt: 3 }} gutterBottom>
        Welcome to the React-ESBuild-MUI Template
      </Typography>
      <Typography variant='h5' component='h2' sx={{ mb: 3 }}>
        A Modern, DIY Web Application Scaffold
      </Typography>
      <Typography variant='body1' sx={{ mb: 3 }}>
        This template provides a simple and manual foundation for building modern React applications. It does NOT use build
        management tools like create-react-app, Vite, or Next.js and instead sets up a fully exposted and pre-configured react
        bundling toolchain that you can adjust yourself without hassle.
      </Typography>
      <Typography variant='body1'>
        The toolchain utilizes esbuild for customizable and fast bundling and neostandard paired with eslint to enforce consistent
        code style. It is pre-configured to use React v19, React Router v7, and MUI v9. It starts from a basic framework with a
        home and about page and a navigation bar with a toggle for light vs dark theme.
      </Typography>
    </>
  )
}

export default HomePage

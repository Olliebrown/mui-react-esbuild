// Material UI Required Fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// Styling baseline and MUI theme management
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

// React Router Provider
import { RouterProvider } from 'react-router/dom'

// Our custom defined routes
import router from './pages/router.jsx'

// Palette context
import PaletteContext from './components/PaletteContext.js'

function App () {
  // Setup switchable theme
  const [paletteMode, setPaletteMode] = React.useState('dark')

  // Create MUI theme based on the current palette mode
  const muiTheme = React.useMemo(
    () => {
      return createTheme({
        palette: { mode: paletteMode }
      })
    },
    [paletteMode]
  )

  return (
    <ThemeProvider theme={muiTheme}>
      <PaletteContext value={{ setPaletteMode }}>
        <CssBaseline />
        <RouterProvider router={router} />
      </PaletteContext>
    </ThemeProvider>
  )
}

export default App

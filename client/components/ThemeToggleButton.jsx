import { useTheme } from '@mui/material/styles'
import { IconButton } from '@mui/material'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import PaletteContext from './PaletteContext.js'

function ThemeToggleButton () {
  const ModeContext = React.use(PaletteContext)
  const muiTheme = useTheme()

  const togglePaletteMode = () => {
    if (muiTheme.palette.mode === 'dark') {
      ModeContext?.setPaletteMode('light')
    } else {
      ModeContext?.setPaletteMode('dark')
    }
  }

  return (
    <IconButton onClick={togglePaletteMode} color='inherit'>
      {muiTheme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  )
}

export default ThemeToggleButton

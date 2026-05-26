import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router'
import ThemeToggleButton from './ThemeToggleButton'

function NavBar () {
  return (
    <AppBar position='static'>
      <Toolbar>
        {/* Project Title/Logo Placeholder */}
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          React Template
        </Typography>

        {/* Navigation Links */}
        <div>
          <Link to='/' viewTransition key='home'>
            <Button color='inherit' sx={{ mr: 2 }}>Home</Button>
          </Link>
          <Link to='/about' viewTransition key='about'>
            <Button color='inherit' sx={{ mr: 2 }}>About</Button>
          </Link>
          <ThemeToggleButton />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

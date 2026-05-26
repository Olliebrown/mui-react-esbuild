import { Outlet } from 'react-router'

import { Container } from '@mui/material'

import NavBar from './NavBar.jsx'

function PageLayout () {
  return (
    <Container maxWidth='lg' sx={{ py: 5 }}>
      <NavBar />
      <Outlet />
    </Container>
  )
}

export default PageLayout

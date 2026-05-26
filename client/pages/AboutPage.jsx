import { Button, Typography } from '@mui/material'
import List from '@mui/material/List'

import { siReact, siReactrouter, siStandardjs, siEsbuild, siMui } from 'simple-icons'

import LILinkButton from '../components/LILinkButton.jsx'
import StandardIcon from '../components/StandardIcon.jsx'

function AboutPage () {
  return (
    <>
      <Typography variant='h3' component='h1' sx={{ mt: 3 }} gutterBottom>
        About This Template Project
      </Typography>
      <Typography variant='body2' color='text.secondary' sx={{ mb: 4 }}>
        A Modern Web Application Scaffold built without using an opaque build management system.
      </Typography>

      <Typography variant='h5' gutterBottom sx={{ mt: 4, mb: 2 }}>
        🚀 Technologies Used
      </Typography>
      <List>
        <LILinkButton disablePadding href='https://reactjs.org/' text='React.js v19' iconElement={<StandardIcon pathStr={siReact.path} />} />
        <LILinkButton disablePadding href='https://mui.com/' text='MUI v9' iconElement={<StandardIcon pathStr={siMui.path} />} />
        <LILinkButton disablePadding href='https://esbuild.github.io/' text='esbuild' iconElement={<StandardIcon pathStr={siEsbuild.path} />} />
        <LILinkButton disablePadding href='https://reactrouter.com/' text='React Router v7' iconElement={<StandardIcon pathStr={siReactrouter.path} />} />
        <LILinkButton disablePadding href='https://github.com/neostandard/neostandard' text='neostandard' iconElement={<StandardIcon pathStr={siStandardjs.path} />} />
      </List>

      <Typography variant='h5' gutterBottom sx={{ mt: 4, mb: 2 }}>
        🔗 Template Repository
      </Typography>
      <Typography variant='body1'>
        You can find the source code and contribute to this template repository on GitHub. It provides a foundation for
        building scalable applications.
      </Typography>
      <Button variant='contained' sx={{ mt: 2 }} component='a' href='https://github.com/your-username/react-esbuild-mui-template' target='_blank' rel='noopener noreferrer'>
        View Template on GitHub
      </Button>
    </>
  )
}

export default AboutPage

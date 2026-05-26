import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

function LILinkButton ({ href, text, iconElement = undefined, ...rest }) {
  return (
    <ListItem {...rest}>
      <ListItemButton component='a' href={href} target='_blank' rel='noopener noreferrer'>
        {iconElement &&
          <ListItemIcon>
            {iconElement}
          </ListItemIcon>}
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

export default LILinkButton

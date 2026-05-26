import SvgIcon from '@mui/material/SvgIcon'

function StandardIcon ({ pathStr, ...rest }) {
  return (
    <SvgIcon {...rest}>
      <path d={pathStr} />
    </SvgIcon>
  )
}

export default StandardIcon

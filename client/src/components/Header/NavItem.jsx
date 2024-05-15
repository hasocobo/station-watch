import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavItem = function ({ link, name, onClick, style }) {
  return (
    <Link
      to={link}
      className={`items-center justify-center rounded-sm p-3 transition 
     duration-200 hover:cursor-pointer hover:bg-slate-200 active:bg-slate-300 ${style}`}
      onClick={onClick}
    >
      {name}
    </Link>
  )
}

NavItem.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string
}

export default NavItem

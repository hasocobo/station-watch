import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavItem = function ({ link, name, onClick, style }) {
  return (
    <Link
      to={link}
      className={`items-center justify-center rounded-md p-2 transition 
     duration-200 hover:cursor-pointer hover:bg-sky-100 active:bg-sky-200 ${style}`}
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

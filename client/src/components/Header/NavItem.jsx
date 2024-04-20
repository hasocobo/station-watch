import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = function({ link, name, onClick, style }) {
  return (
    <nav className={`p-2 items-center justify-center rounded-md hover:bg-sky-100 
     active:bg-sky-200 transition duration-200 hover:cursor-pointer ${style}`} 
     onClick={onClick}
    >
      <Link to={link} className="">
        {name}
      </Link>
    </nav>
  )
}


NavItem.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
}

export default NavItem;

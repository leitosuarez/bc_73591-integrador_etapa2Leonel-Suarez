import { NavLink } from "react-router"

const NavItem = ({item}) => {
  return (
    <li className="nav-bar__nav-item">
        <NavLink to={item.path} className="nav-bar__nav-link">
            {item.nombre}
        </NavLink>
    </li>
  )
}

export default NavItem
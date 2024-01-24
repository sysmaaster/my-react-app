import { NavLink } from "react-router-dom"
const NavItem = (props) => {
  return <div className="item">
      <NavLink to={props.url}>
        <i className={`material-symbols-outlined `}>{props.icons}</i>
        <span> {props.title}</span>
      </NavLink>
      </div>  
};
export default NavItem
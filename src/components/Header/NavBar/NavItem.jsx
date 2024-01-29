import { NavLink } from "react-router-dom"

const NavItem = (props) => {
  const {url,title,icons} = props;
  
  return <div className="item">
      <NavLink to={url}>
        <i className={`material-symbols-outlined `}>{icons}</i>
        <span> {title}</span>
      </NavLink>
      </div>  
};
export default NavItem
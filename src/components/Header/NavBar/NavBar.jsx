import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
  return <div className={s.item}>
          <NavLink className={(navData) => navData.isActive ? s.active : ''} to={props.url}>{props.title}</NavLink>
      </div>
}

const NavBar = () => {
  return (
      
    <div className="sidebar">
      
          <div className="item" id="active">
            <i className="bx bx-home-alt-2" />
            <a href="#">Overview</a>
      </div>
      
          <div className="item">
            <i className="bx bx-grid-alt" />
            <a href="#">Course</a>
      </div>
      
          <div className="item">
            <i className="bx bx-folder" />
            <a href="#">Resources</a>
      </div>
      
          <div className="item">
            <i className="bx bx-message-square-dots" />
            <a href="#">Message</a>
      </div>
      
          <div className="item">
            <i className="bx bx-cog" />
            <a href="#">Setting</a>
          </div>


{/*


            <ul className="header__menu_nav" id='menu_nav'>
			<li  className={s.nav__item}> <NavItem url={NavItemData[4].urly} title={NavItemData[4].title}/></li>
			<li  className={s.nav__item}> <NavItem url={NavItemData[3].urly} title={NavItemData[3].title}/></li>
			<li  className={s.nav__item}> <NavItem url={NavItemData[2].urly} title={NavItemData[2].title}/></li>
			<li  className={s.nav__item}> <NavItem url={NavItemData[1].urly} title={NavItemData[1].title}/></li>
			<li  className={s.nav__item}> <NavItem url={NavItemData[0].urly} title={NavItemData[0].title}/></li>
		</ul>*/}
        </div>
    );
}
export default NavBar
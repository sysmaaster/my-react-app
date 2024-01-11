import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
  return <div className={s.item}>
          <NavLink className={(navData) => navData.isActive ? s.active : ''} to={props.url}>{props.title}</NavLink>
      </div>
}

let NavItemData = [ {id: 1,urly: '/panel',title: 'Панель Управління'}, {id: 2,urly: '/exes',title: 'Витрати'}, {id: 3,urly: '/income',title: 'Доходи'},
                    {id: 4,urly: '/analysis',title: 'Аналіз'}, {id: 5,urly: '/budget',title: 'Бюджет'} ]

const NavBar = () => {
    return (
            <ul className="header__menu_nav" id='menu_nav'>
			<li  className={s.nav__item}> <NavItem url={NavItemData[4].urly} title={NavItemData[4].title}/></li>
			<li  className={s.nav__item}> <NavItem url={NavItemData[3].urly} title={NavItemData[3].title}/></li>
			<li  className={s.nav__item}> <NavItem url={NavItemData[2].urly} title={NavItemData[2].title}/></li>
			<li  className={s.nav__item}> <NavItem url={NavItemData[1].urly} title={NavItemData[1].title}/></li>
			<li  className={s.nav__item}> <NavItem url={NavItemData[0].urly} title={NavItemData[0].title}/></li>
		</ul>
    );
}
export default NavBar
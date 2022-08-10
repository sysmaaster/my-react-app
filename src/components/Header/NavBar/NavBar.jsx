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
let NavDropDownData = [{id: 1,urly: '/ansis',title: 'Elim'}, {id: 2,urly: '/exis',title: 'Exit'}]

const NavBar = () => {
    return (
        <div className={s.NavBar}>
            <div className={s.item}>
                <button className={s.dropbtn}>Dropdown
                    <i className={s.fa}>&#9660;</i>
                </button>
                <div className={s.dropdown_content}>
                    <NavLink className={(navData) => navData.isActive ? s.active : ''} to={NavDropDownData[0].urly}>{NavDropDownData[0].title}</NavLink>
                    <NavLink className={(navData) => navData.isActive ? s.active : ''} to={NavDropDownData[1].urly}>{NavDropDownData[1].title}</NavLink>
                </div>
            </div>
            <NavItem url={NavItemData[4].urly} title={NavItemData[4].title}/>
            <NavItem url={NavItemData[3].urly} title={NavItemData[3].title}/>
            <NavItem url={NavItemData[2].urly} title={NavItemData[2].title}/>
            <NavItem url={NavItemData[1].urly} title={NavItemData[1].title}/>
            <NavItem url={NavItemData[0].urly} title={NavItemData[0].title}/>

        </div>
    );
}
export default NavBar
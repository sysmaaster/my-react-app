import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink className={(navData) => navData.isActive ? s.active : ''} to={props.url}>{props.title}</NavLink>
        </div>
    )
}

const NavBar = (props) => {
    let NavElement = props.state.navList.map(n => <NavItem url={n.url} title={n.title}/>)
    return (
        <div className={s.NavBar}>
            <div className={s.profile}>
                <img src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png" alt="" width="100"
                     height="100"></img>

                <div className={s.name}>
                    {props.state.profile.name}
                </div>
                <div className={s.job}>
                    {props.state.profile.job}
                </div>
            </div>

            {NavElement}
        </div>
    );
}
export default NavBar
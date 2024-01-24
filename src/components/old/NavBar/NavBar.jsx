import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    // let NavElement = props.state.navList.map(n => <NavItem url={n.url} title={n.title}/>)
    return (
        <div className={s.NavBar}>
            <div className={s.profile}>
                <img src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png" alt="" width="100"
                     height="100"></img>
                <div className={s.name}>
                    Oleksandr A.
                </div>
                <div className={s.job}>
                    Web Developer
                </div>
            </div>
    
            {/*{NavElement}*/}
    
            <div className={s.item}>
                <NavLink className={( navData ) => navData.isActive ? s.active : ''} to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={( navData ) => navData.isActive ? s.active : ''} to="/chat">Chat</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={( navData ) => navData.isActive ? s.active : ''} to="/listUsers">Users
                    List </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={( navData ) => navData.isActive ? s.active : ''} to="/Settings">Settings</NavLink>
            </div>
        </div>
    );
};
export default NavBar
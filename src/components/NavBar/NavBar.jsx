import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={s.NavBar}>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : ''} to="/">Home</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : ''} to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : ''} to="/chat">Chat</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : ''} to="/settings">Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : ''} to="/about">About As</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? s.active : ''} to="/entry">Entry</NavLink>
            </div>
        </div>
    );
}
export default NavBar
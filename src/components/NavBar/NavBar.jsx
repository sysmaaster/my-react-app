import React from 'react';
import s from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={s.NavBar}>
            <div className={`${s.item} ${s.active}`}><a href="#">Home</a></div>
            <div className={s.item}><a href="#">Profile</a></div>
            <div className={s.item}><a href="#">Contact</a></div>
            <div className={s.item}><a href="#">Settings</a></div>
            <div className={s.item}><a href="#">About As</a></div>
            <div className={s.item}><a href="#">Entry</a></div>
        </div>
    );
}
export default NavBar
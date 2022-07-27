import React from 'react';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={s.NavBar}>

      <div className={s.item}><a>Home</a></div>
      <div className={`${s.item} ${s.active}`}><a>Profile</a></div>
      <div className={s.item}><a>Contact</a></div>
      <div className={s.item}><a>Settings</a></div>
      <div className={s.item}><a>About As</a></div>
      <div className={s.item}><a>Entri</a></div>

    </div>
  );
}
export default NavBar
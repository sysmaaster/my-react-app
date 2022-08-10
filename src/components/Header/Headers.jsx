import React from 'react';
import s from './Headers.module.css';
import UsersChip from '../Profile/UsersChip';

const Header = () => {
  return (
    <header className={s.Header}>
      <img className={s.logo} src='https://homemoney.ua/Images/main/HomeMoney_logo_small.png' alt="logo" />

      <div className={s.menu}>
        <span>Welcome to  Me</span>
      </div>

      
        <UsersChip name='sysMaaster'/>
    </header>
  );
}
export default Header
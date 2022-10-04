import React from 'react';
import s from './Headers.module.css';
import UsersChip from '../common/UsersChip/UsersChip';

const Header = () => {
  return (
    <header className={s.Header}>
      <img className={s.logo} src='https://www.digiseller.ru/preview/1043066/p1_3263511_feb4e6b8.png' alt="logo" />

      <div className={s.menu}>
        <span className={s.title}>Welcome to  Me</span>
      </div>

      
        <UsersChip name='sysMaaster'/>
    </header>
  );
}
export default Header
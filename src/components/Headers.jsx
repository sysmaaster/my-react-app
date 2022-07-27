import React from 'react';
import s from './Headers.module.css';

const Header = () => {
    return (
      <header className={s.Header}>
          <img className={s.logo} src='https://www.digiseller.ru/preview/1043066/p1_3263511_feb4e6b8.png' alt="logo" />
        
        <div className={s.menu}>
        <a href=""> Home </a>--
        <a href=""> Profile </a>--
        <a href=""> Feed </a>--
        <a href=""> Config</a>
        </div>
          
        <div className={s.user}>  
        <img className={s.logo} src="https://img2.freepng.ru/20180520/iug/kisspng-computer-icons-user-profile-synonyms-and-antonyms-5b013f455c55c1.0171283215268083893782.jpg" alt="header тут?"/>
        
        </div>
        
      </header>
    );
  }
  export default Header
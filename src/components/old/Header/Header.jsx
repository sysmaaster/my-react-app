import React from 'react';
import s from './Headers.module.css';
import UsersChip from '../UsersChip/UsersChip';
import logos from '../img/Daco.png'

const Header = ( props ) => {
    return (
        <header className={s.Header}>
            <img className={s.logo} src={logos} alt="logo"/>
            
            <div className={s.menu}>
                <span className={s.title}>{props.emailUser} Welcome to  Me</span>
            </div>
            
            {props.isAuthorise ? <UsersChip name={props.emailUser}/> : 'sa'}
        
        </header>
  );
}
export default Header
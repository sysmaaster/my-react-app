import React from 'react';
import s from './Headers.module.css';
import NavBar from "./NavBar/NavBar";

const Header = (props) => {
    return (
        <header className={s.Header}>
            <img className={s.logo} src='https://homemoney.ua/Images/main/HomeMoney_logo_small.png' alt="logo"/>

            <div className={s.inform}>
                <div className={s.info}>
                    <span>Welcome - user -- || exit</span>
                </div>

            </div>

            <div className={s.menu}>
                <NavBar/>
            </div>

        </header>
    );
}
export default Header
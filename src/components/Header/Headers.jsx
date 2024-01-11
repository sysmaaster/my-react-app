import React from 'react';
import s from './Headers.module.css';
import NavBar from "./NavBar/NavBar";

const Header = (props) => {
    return (
        <header className={s.Header }>
            <div className={s.container }>
	<div className={s.topnav }>
		<div className={s.logo }>logo</div>
                    <div className="header__menu_bars" id='menu'>
                        <span class="material-symbols-outlined">
menu
                        </span>
                    </div>
		<NavBar/>
	</div>
</div>

            



        </header>
    );
}
export default Header
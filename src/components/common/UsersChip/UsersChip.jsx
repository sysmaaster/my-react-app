import React from 'react';
import s from './UserChip.module.css';

const UsersChip = (props) => {
    return (
        <div className={s.chip}>
            <img src="https://html5css.ru/howto/img_avatar.png" alt="Person" width="96" height="96" />
            <span>{props.name}</span>
            <div className={s.dropdown_content}>

                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">Link 1</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">Link 2</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">Link 3</a>
            </div>
        </div>

    );
}
export default UsersChip
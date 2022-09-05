import React from 'react';
import s from './UserChip.module.css';

const UsersChip = (props) => {
    return (
        <div className={s.chip}>
            <img src="https://html5css.ru/howto/img_avatar.png" alt="Person" width="96" height="96" />
            <span>{props.name}</span>
            <div className={s.dropdown_content}>

                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>

    );
}
export default UsersChip
import React from 'react';
import s from './Profiles.module.css';

const UsersChip = (props) => {
    return (
        <div className={s.chip}>
            <img src="https://html5css.ru/howto/img_avatar.png" alt="Person" width="96" height="96" />
            <span>{props.name}</span>
        </div>

    );
}
export default UsersChip
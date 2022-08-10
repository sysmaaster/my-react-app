import React from 'react';
import s from './UserChip.module.css';

const UsersChipXX = (props) => {
    return (
        <div className={s.chipXX}>
            <img src="https://html5css.ru/w3images/avatar6.png" alt="Person" width="96" height="96" />
            <span>{props.name}</span>
            <span className={s.closebtn} onClick="this.parentElement.style.display='none'">&times;</span>
        </div>

    );
}
export default UsersChipXX
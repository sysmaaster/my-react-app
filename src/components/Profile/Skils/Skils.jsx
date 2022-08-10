import React from 'react';
import s from './Skils.module.css';

const UsrSkills = () => {
    return (
        <div>
            <p>JavaScript</p>
            <div className={s.container}>
                <div className={`${s.skills} ${s.js}`}>65%</div>
            </div>
            <p>CSS</p>
            <div className={s.container}>
                <div className={`${s.skills} ${s.css}` }>44%</div>
            </div>
            <p>HTML</p>
            <div className={s.container}>
                <div className={`${s.skills} ${s.html}` }>35%</div>
            </div>
            <p>PHP</p>
            <div className={s.container}>
                <div className={`${s.skills} ${s.php}`}>26%</div>
            </div>
        </div>
    );
}
export default UsrSkills
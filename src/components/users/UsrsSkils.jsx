import React from 'react';
import s from './UsrSkils.module.css';

const UsrSkils = () => {
    return (
        <div>

            <p>JavaScript</p>
            <div class={s.container}>
                <div class={`${s.skills} ${s.js}`}>65%</div>
            </div>
            <p>CSS</p>
            <div class={s.container}>
                <div class={`${s.skills} ${s.css}` }>44%</div>
            </div>
            <p>HTML</p>
            <div class={s.container}>
                <div class={`${s.skills} ${s.html}` }>35%</div>
            </div>
            <p>PHP</p>
            <div class={s.container}>
                <div class={`${s.skills} ${s.php}`}>26%</div>
            </div>

        </div>

    );
}
export default UsrSkils
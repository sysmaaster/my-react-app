import React from 'react';
import s from './Dashboard.module.css';

const Dashboard = (props) => {
    return (
        <div className={s.bgimg}>
            <div className={s.topleft}>
                <p>{props.name}</p>
            </div>
            <div className={s.middle}>
                <h1>COMING SOON</h1>
                <hr></hr>
                    <p>235 days</p>
            </div>
            <div className={s.bottomleft}>
                <p>sysMaaster</p>
            </div>
        </div>
);
}
export default Dashboard
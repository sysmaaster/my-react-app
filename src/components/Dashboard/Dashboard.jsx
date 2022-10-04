import React from 'react';
import RatingBlock from './Raring/RatingBlock';
import s from './Dashboard.module.css';
import UsrSkills from './Skils/Skils';
import Identify from "./Identify/Identify";

const Dashboard = ( props ) => {
	return (
		<div className={s.Profiles}>
			<div className={s.container}>
				<div className={s.block}>
					<div className={s.avatar}>
						<img className={s.ava}
						     src='https://photopict.ru/wp-content/uploads/2019/05/prikol-nye-kartinki-na-avu1.jpg'
						     alt=''/>
					</div>
					<div style={{ display: 'inline-block', marginLeft: '220px' }}>
						<span> Кнопки </span> <span> Кнопки </span><span> Кнопки </span> <span> Кнопки </span>
					</div>
					<Identify/>
				
				</div>
				<div className={s.xPay}>
					<UsrSkills/>
				</div>
				<div className={s.rating}>
					<RatingBlock/>
				</div>
			</div>
		</div>
	);
}
export default Dashboard
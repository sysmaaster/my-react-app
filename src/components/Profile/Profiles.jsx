import React from 'react';
import RatingBlock from './Raring/RatingBlock';
import s from './Profiles.module.css';
import UsrSkills from './Skils';

const Profiles = () => {
  return (
    <div className={s.Profiles}>
      <div className={s.container}>
        <div className={s.block}>
          <div className={s.avatar}>
            <img className={s.ava} src='https://photopict.ru/wp-content/uploads/2019/05/prikol-nye-kartinki-na-avu1.jpg'  alt=''/>
          </div>

          <div className="">
            Кнопки
          </div>
          <div className="">
            Кнопки
          </div>



        </div>
        <div className={s.xPay}>
          <UsrSkills />
        </div>
        <div className={s.rating}>
          <RatingBlock />
        </div>
      </div>
    </div>
  );
}
export default Profiles
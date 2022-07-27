import React from 'react';
import UserRating from './UserRating';
import s from './UsrProfiles.module.css';
import UsrSkils from './UsrsSkils';

const UsrProfiles = () => {
  return (
    <div className={s.Profiles}>
      <div className={s.block}>
        <div className={s.myFio}>
          <div>
            <img className={s.avatar} src='https://photopict.ru/wp-content/uploads/2019/05/prikol-nye-kartinki-na-avu1.jpg' />
          </div>


        </div>
        <div className={s.xPay}>
          <UsrSkils />

        </div>
        <div className={s.rating}>
          <UserRating />
        </div>


      </div>
    </div>
  );
}
export default UsrProfiles
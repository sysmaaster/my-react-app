import React from 'react';
import s from './UserRating.module.css';

const UserRating = () => {
  return (
    <div className='s'>

<span className={s.heading}>User Rating</span>
<p>4.1 average based on 254 reviews.</p>

<div className={s.row}>
  <div className={s.side}>
    <div>5 star</div>
  </div>
  <div className={s.middle}>
    <div className={s.bar_container}>
      <div className={s.bar_5}></div>
    </div>
  </div>
  <div className={`${s.side} ${s.right}`}>
    <div>150</div>
  </div>
  <div className={s.side}>
    <div>4 star</div>
  </div>
  <div className={s.middle}>
    <div className={s.bar_container}>
      <div className={s.bar_4}></div>
    </div>
  </div>
  <div className={`${s.side} ${s.right}`}>
    <div>63</div>
  </div>
  <div className={s.side}>
    <div>3 star</div>
  </div>
  <div className={s.middle}>
    <div className={s.bar_container}>
      <div className={s.bar_3}></div>
    </div>
  </div>
  <div className={`${s.side} ${s.right}`}>
    <div>15</div>
  </div>
  <div className={s.side}>
    <div>2 star</div>
  </div>
  <div className={s.middle}>
    <div className={s.bar_container}>
      <div className={s.bar_2}></div>
    </div>
  </div>
  <div className={`${s.side} ${s.right}`}>
    <div>6</div>
  </div>
  <div className={s.side}>
    <div>1 star</div>
  </div>
  <div className={s.middle}>
    <div className={s.bar_container}>
      <div className={s.bar_1}></div>
    </div>
  </div>
  <div className={`${s.side} ${s.right}`}>
    <div>20</div>
  </div>
</div> </div> 
  );
}
export default UserRating
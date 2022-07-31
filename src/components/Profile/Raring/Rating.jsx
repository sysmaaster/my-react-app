
import React from 'react';
import s from './Rating.module.css';

const Rating = (props) => {
  return (
      <div>
      <div className={s.side}>
        <div>{`${props.name} star`}</div>
      </div>

  <div className={s.middle}>
    <div className={s.bar_container}>
      <div className={`bar_${props.name}`}></div>
    </div>
  </div>
  <div className={`${s.side} ${s.right}`}>
    <div>{props.star}</div>
  </div></div>
)
}

export default Rating
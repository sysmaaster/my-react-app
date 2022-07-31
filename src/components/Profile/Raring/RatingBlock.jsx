import React from 'react';
import s from './Rating.module.css';
import Rating from "./Rating";

const RatingBlock = () => {
    return (
        <div className='s'>
            <span className={s.heading}>User Rating</span>
            <p>4.1 average based on 254 reviews.</p>

            <div className={s.row}>
                <Rating name='5' star='150' width='' />
                <Rating name='4' star='63' width='' />
                <Rating name='3' star='15' width='10' />
                <Rating name='2' star='6' width='' />
                <Rating name='1' star='20' width='' />



            </div>
        </div>
    );
}
export default RatingBlock
import React from 'react';
import s from './Chat.module.css';

const MessageItem = (props) => {
    return (<div>
        <div className={s.message}>
            <div className={props.send ? s.noBlock : ''}>
                <div className={s.photo}>
                    <div className={props.on === "true" ? s.online : props.on === "false" ? s.offline : ''}></div>
                </div>
            </div>
            <div className={props.send ? s.response : ''}>
                <div className={props.send ? s.text_only : ''}>
                    <p className={s.text}> {props.message} </p>
                </div>
            </div>
        </div>
            <div className={props.time ? s.time : s.noBlock}>
                <p className={props.send ? s.response_time : ''}> {props.time}</p>
            </div>
    </div>
    )
}
export default MessageItem


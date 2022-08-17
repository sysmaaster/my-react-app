import React from 'react';
import s from './Chat.module.css';
import HeaderChat from "./HeaderChat";

const Item = (props) => {
    return (<div>
        <div className={s.message}>
            <div className={props.re ? s.noBlock : ''  }>
                <div className={s.photo}>
                    <div className={props.on ? s.offline : s.online}></div>
                </div>
            </div>
            <div className={props.re ?  s.response  : ''}>
            <div className={props.me ? s.text_only : ''}>
            <p className={s.text}> {props.messages} </p>
            </div>
            </div>
        </div>
        <div className={props.time ? s.time : s.noBlock}>
        <p className={props.re ? s.response_time : ''}>{props.time}</p>
        </div>
    </div>
    )
}

const Chat = (props) => {
    return (
        <section className={s.chat}>
            <HeaderChat ava={props.ava} name={props.name} />
            <div className={s.messages_chat}>
                <Item re='2' on='false' time='' messages="if possible 😳"/>
                <Item re='5' on='e' time='2h38' messages=" What are you doing tonight ? Want to go take a drink ?"/>
                <Item re='' on='' time='' messages="Hey Megan ! It's been a while 😃"/>
                <Item re='' on='true' time='5h29' messages="When can we meet ?"/>
                <Item re='5' on="" time='15h09' messages="9 pm at the bar if possible 😳"/>
            </div>
            <div className={s.footer_chat}>
                <i className={s.icon + " " + s.clickable} aria-hidden="true"></i>
                <i className={s.icon + " " + s.clickable} aria-hidden="true"></i>
                <input type="text" className={s.write_message} placeholder="Type your message here"></input>
                <i className={s.icon + " " + s.send + " " + s.clickable} aria-hidden="true"></i>
            </div>
        </section>
    )
}
export default Chat


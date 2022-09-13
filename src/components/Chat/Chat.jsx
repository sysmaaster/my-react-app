import React from 'react';
import s from './Chat.module.css';
import DialogItem from "./DialogItem";
import Search from "./Search";
import MessageItem from "./MessageItem";
import background from "../img/ava_r.svg";
import {SendMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/chat-reducer";

const Chat = (props) => {
    let dialogElement = props.state.dialogs.map(d => <DialogItem id={d.id} on={d.on} ava={d.ava} name={d.name}
                                                                 message={d.message} time={d.time}/>)
    let messageElement = props.state.messages.map(m => <MessageItem id={m.id} send={m.send}
                                                                    message={m.message} time={m.time}/>)
    return (
        <div className={s.container}>
            <div className={s.row}>
                <section className={s.discussions}>
                    <Search dispatch={props.dispatch}
                            newSearchInputText={props.newSearchInputText}/>
                    <div className={s.dialog_list}>
                        {dialogElement}
                    </div>
                </section>
                <section className={s.chat}>
                    <HeaderChat headers={props.state.headers}/>

                    <div className={s.messages_chat}>
                        {messageElement}
                    </div>
                    <FooterChat newMessageValue={props.state.newMessageValue}
                                dispatch={props.dispatch}/>
                </section>
            </div>
        </div>
    )
}

const HeaderChat = (props) => {
    return (
        <div className={s.header_chat}>
            <i className={s.ava} style={{backgroundImage: `url(${background})`}} aria-hidden="true"></i>
            <p className={s.name}>{props.headers.name}</p>
            <i className={s.icon + " " + s.clickable + " " + s.right} aria-hidden="true"></i>
        </div>
    )
}

const FooterChat = (props) => {
    let chatInputElement = React.createRef();
    let sendMessage = () => {

        props.dispatch(SendMessageActionCreator());
    }
    let newMessageText = () => {
        let text = chatInputElement.current.value
        props.dispatch(UpdateNewMessageTextActionCreator(text));

    }
    return (
        <div className={s.footer_chat}>
            <i className={s.icon + " " + s.clickable} aria-hidden="true"></i>
            <i className={s.icon + " " + s.clickable} aria-hidden="true"></i>
            <input ref={chatInputElement} type="text" className={s.write_message}
                   onChange={newMessageText}
                   value={props.newMessageValue}
                   placeholder="Type your message here"/>
            <i className={s.icon + " " + s.send + " " + s.clickable}
               onClick={sendMessage} aria-hidden="true"></i>
        </div>
    )
}

export default Chat
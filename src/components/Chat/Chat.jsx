import React from 'react';
import s from './Chat.module.css';
import DialogItem from "./DialogItem";
import Search from "./Search";
import MessageItem from "./MessageItem";


const Chat = (props) => {

    let dialogElement = props.state.dialogs.map(d => <DialogItem id={d.id} on={d.on} ava={d.ava} name={d.name}
                                                                 message={d.message} time={d.time}/>)
    let messageElement = props.state.messages.map(m => <MessageItem id={m.id} re={m.re} message={m.message}
                                                                    time={m.time}/>)
    return (
        <div className={s.container}>
            <div className={s.row}>

                <section className={s.discussions}>
                    <Search/>
                    <div className={s.dialog_list}>
                        {dialogElement}
                    </div>
                </section>
                <section className={s.chat}>
                    <HeaderChat headers={props.state.headers}/>

                    <div className={s.messages_chat}>
                        {messageElement}
                    </div>
                    <FooterChat />
                </section>
            </div>
        </div>
    )
}

const HeaderChat = (props) => {
    return (
        <div className={s.header_chat}>
            <i className={s.ava} aria-hidden="true"></i>
            <p className={s.name}>{props.headers.name}</p>
            <i className={s.icon + " " + s.clickable + " " + s.right} aria-hidden="true"></i>
        </div>
    )
}

const FooterChat = (props) => {
  return(
      <div className={s.footer_chat}>
          <i className={s.icon + " " + s.clickable} aria-hidden="true"></i>
          <i className={s.icon + " " + s.clickable} aria-hidden="true"></i>
          <input type="text" className={s.write_message} placeholder="Type your message here"></input>
          <i className={s.icon + " " + s.send + " " + s.clickable} aria-hidden="true"></i>
      </div>
  )
}

export default Chat
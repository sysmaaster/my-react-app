import React from "react";
import s from "./Chat.module.css";

const FooterChat = ( props ) => {
	let chatInputElement = React.createRef();
	let sendMessage = () => {
		props.MessageSend();
	}
	let newMessageText = ( e ) => {
		let text = chatInputElement.current.value
		props.newTextMessage( text );
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
export default FooterChat
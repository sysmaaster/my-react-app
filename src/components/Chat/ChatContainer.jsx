import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message";
import {
	SearchDialogActionCreator,
	SendMessageActionCreator,
	UpdateNewMessageTextActionCreator,
	UpdateNewSearchTextActionCreator
} from "../../redux/chat-reducer";
import React from "react";
import Chat from "./Chat";


const ChatContainer = ( props ) => {
	let dialogElement = props.state.dialogs.map( d =>
		<DialogItem id={d.id} on={d.on} ava={d.ava} name={d.name} message={d.message} time={d.time}/> )
	let messageElement = props.state.messages.map( m =>
		<Message id={m.id} send={m.send} message={m.message} time={m.time}/> )
	let searchItem = () => { props.dispatch( SearchDialogActionCreator() ); }
	let newTextSearch = ( text ) => { props.dispatch( UpdateNewSearchTextActionCreator( text ) ); }
	let MessageSend = () => { props.dispatch( SendMessageActionCreator() ); }
	let newTextMessage = ( text ) => { props.dispatch( UpdateNewMessageTextActionCreator( text ) ); }
	
	return ( <Chat
		headers={props.state.headers}
		newMessageValue={props.state.newMessageValue}
		dialogElement={dialogElement}
		messageElement={messageElement}
		searchItem={searchItem}
		newTextSearch={newTextSearch}
		MessageSend={MessageSend}
		newTextMessage={newTextMessage}/> )
}
export default ChatContainer
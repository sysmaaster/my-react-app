import DialogItem from "./DialogItem/DialogItem";
import Message from "./Mesage/Message";
import {
	SearchDialogActionCreator,
	SendMessageActionCreator,
	UpdateNewMessageTextActionCreator,
	UpdateNewSearchTextActionCreator
} from "../../redux/chat-reducer";
import React from "react";
import Chat from "./Chat";
import { connect } from "react-redux";

const mapStateToProps = ( props ) => {
	return {
		newMessageValue: props.chatPage.newMessageValue,
		newSearchInputText: props.chatPage.newSearchValue,
		headers: props.chatPage.headers,
		dialogElement: props.chatPage.dialogs.map( d =>
			<DialogItem id={d.id} on={d.on} ava={d.ava} name={d.name} key={d.id} message={d.message} time={d.time}/> ),
		messageElement: props.chatPage.messages.map( m =>
			<Message id={m.id} send={m.send} key={m.id} message={m.message} time={m.time}/> )
	}
}
const mapDispatchToProps = ( dispatch ) => {
	return {
		newTextSearch: ( text ) => { dispatch( UpdateNewSearchTextActionCreator( text ) ); },
		newTextMessage: ( text ) => { dispatch( UpdateNewMessageTextActionCreator( text ) ) },
		MessageSend: () => { dispatch( SendMessageActionCreator() ) },
		searchItem: () => { dispatch( SearchDialogActionCreator() ); },
	}
}
const ChatContainer = connect( mapStateToProps, mapDispatchToProps )( Chat );

export default ChatContainer
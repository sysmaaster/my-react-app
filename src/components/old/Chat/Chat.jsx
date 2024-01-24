import React from 'react';
import s from './Chat.module.css';
import Search from "./Search/Search";
import HeaderChat from "./HeaderChat";
import FooterChat from "./FooterChat";

const Chat = ( props ) => {
	return (
		<div className={s.container}>
			<div className={s.row}>
				<section className={s.discussions}>
					<Search newTextSearch={props.newTextSearch}
					        searchItem={props.searchItem}
					        newSearchInputText={props.newSearchInputText}/>
					<div className={s.dialog_list}>
						{props.dialogElement}
					</div>
				</section>
				<section className={s.chat}>
					<HeaderChat headers={props.headers}/>
					<div className={s.messages_chat}>
						{props.messageElement}
					</div>
					<FooterChat newMessageValue={props.newMessageValue}
					            newTextMessage={props.newTextMessage}
					            MessageSend={props.MessageSend}/>
				</section>
			</div>
		</div>
	)
};

export default Chat
import s from "./Chat.module.css";
import background from "../img/ava_r.svg";
import React from "react";


const HeaderChat = ( props ) => {
	return (
		<div className={s.header_chat}>
			<i className={s.ava} style={{ backgroundImage: `url(${background})` }} aria-hidden="true"></i>
			<p className={s.name}>{props.headers.name}</p>
			<i className={s.icon + " " + s.clickable + " " + s.right} aria-hidden="true"></i>
		</div>
	)
};
export default HeaderChat
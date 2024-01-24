import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import background from "../../img/ava_r.svg";

const DialogItem = ( props ) => {
	return (
		<NavLink className={( navData ) => navData.isActive ? s.message_active : ''} to={"/chat/" + props.id}>
			<div className={s.discussion}>
				<div className={s.photo} style={{ backgroundImage: `url(${background})` }}>
					<div className={props.on === "true" ? s.online : props.on === "false" ? s.offline : ''}></div>
				</div>
				<div className={s.desc_contact}>
					<p className={s.name}>{props.name}</p>
					<p className={s.message}>{props.message}</p>
				</div>
				<div className={s.timer}>{props.time}</div>
			</div>
		</NavLink>
	)
};
export default DialogItem
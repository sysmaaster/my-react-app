import React from "react";
import s from "./List.module.css";
import {NavLink} from "react-router-dom";
import background from "./../../img/ava_r.svg";

const List = (props) => {
    return (
        <NavLink className={(navData) => navData.isActive ?  s.message_active : ''} to={"/chat/"+ props.id}>
        <div className={s.discussion}>
            <div className={s.photo} style={{ backgroundImage: `url(${background})` }}>
                <div className={s.offline}></div>
            </div>
            <div className={s.desc_contact}>
                <p className={s.name}>{props.name}</p>
                <p className={s.message}>{props.message}</p>
            </div>
            <div className={s.timer}>{props.time}</div>

        </div> </NavLink>
    )
}
export  default List
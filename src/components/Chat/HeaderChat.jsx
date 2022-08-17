import s from "./Chat.module.css";
import React from "react";

const HeaderChat = (props) => {
  return (
      <div className={s.header_chat}>
          <i className={s.ava} aria-hidden="true"></i>
          <p className={s.name}>{props.name}</p>
          <i className={s.icon + " " + s.clickable + " " +  s.right} aria-hidden="true"></i>
      </div>
  )
}
export default HeaderChat
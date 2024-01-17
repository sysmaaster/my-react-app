import React from "react";
import s from "./Alert.module.css"

const Alert = (props) => {
  return (
      <div className={`${s.alert} ${props.warm}`}>
          <span className={s.close_btn} onClick="this.parentElement.style.display='none';">&times;</span>
          <strong>{props.cotegory }</strong> {props.msg}
      </div>
  )
}
export default Alert
import React from "react";
import s from "./List.module.css";
import UsersChip from "../Profile/UsersChip";

const List = () => {
    return (
        <div className={s.container}>
            <UsersChip name='1'/>
            <UsersChip name='2'/>
        </div>
    )
}
export  default List
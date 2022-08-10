import React from "react";
import s from "./List.module.css";
import UsersChipXX from "../Profile/UsersChipXX";

const List = () => {
    return (
        <div className={s.container}>
            <UsersChipXX name='1'/>
            <UsersChipXX name='2'/>
            <UsersChipXX name='3'/>
            <UsersChipXX name='4'/>
            <UsersChipXX name='5'/>
            <UsersChipXX name='6'/>
            <UsersChipXX name='7'/>
            <UsersChipXX name='8'/>
            <UsersChipXX name='9'/>
            <UsersChipXX name='10'/>
            <UsersChipXX name='1'/>
            <UsersChipXX name='2'/>
        </div>
    )
}
export  default List
import React from 'react';
import s from './Chat.module.css';
import List from "./List";
import Alert from "../Alert";
import Chat from "./Chat";

const Chats = () => {
    return (
        <div className={s.container}>
            <div className={s.alert}>
                <Alert warm='success' cotegory='Success! '  msg='Indicates a dangerous or potentially negative action.' />
            </div>

        <div className={s.list}>
            <List />
        </div>
            <div className={s.chat}>
            <Chat />
        </div>


        </div>
    )
}
export  default Chats
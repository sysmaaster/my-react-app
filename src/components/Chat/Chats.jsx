import React from 'react';
import s from './Chat.module.css';
import List from "./List";
import Search from "./Search";
import Chat from "./Chat";

const Chats = (props) => {
    return (
        <div className={s.container}>
            <div className={s.row}>
                <section className={s.discussions}>
                    <Search/>
                    <List id='3' ava='' name='Megan Leib' message="9 pm at the bar if possible 😳" time="12 sec"/>
                    <List id='4' ava='' name='Dave Curlew' message="Let's meet for a coffee or something today ?"
                          time="3 min"/>
                    <List id='5' ava='' name='Jerome Seiner' message="I've sent you the annual report" time="42 min"/>
                    <List id='6' ava='' name='Billy Southward' message="Aha-hah 😂" time="4 days"/>
                </section>
                    <Chat id='3' ava='' name='Megan Leib'/>
            </div>
        </div>
    )
}
export default Chats
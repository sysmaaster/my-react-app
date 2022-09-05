import React from 'react';
import s from './Chat.module.css';
import DialogItem from "./DialogItem";
import Search from "./Search";
import MessageItem from "./MessageItem";


const Chat = (props) => {
let dialogs = [
    {id:3, on:'true', ava:'', name:'Megan Leib', message:"ds", time:'ddd'},
    {id:2, on:'false', ava:'', name:'Dave Curlew', message:"", time:''},
    {id:5, on:'true', ava:'', name:'Billy Southward', message:"", time:''},
    {id:2, on:'false', ava:'', name:'Dave Curlew', message:"", time:''},
    {id:4, on:'false', ava:'', name:'Jerome Seiner', message:"", time:'' },
    {id:5, on:'true', ava:'', name:'Billy Southward', message:"", time:''},
    {id:2, on:'false', ava:'', name:'Dave Curlew', message:"", time:''},
    {id:4, on:'false', ava:'', name:'Jerome Seiner', message:"", time:'' },
    {id:5, on:'true', ava:'', name:'Billy Southward', message:"", time:''},
    {id:4, on:'false', ava:'', name:'Jerome Seiner', message:"", time:'' },
    {id:5, on:'true', ava:'', name:'Billy Southward', message:"", time:''},
    {id:2, on:'false', ava:'', name:'Dave Curlew', message:"", time:''},
    {id:4, on:'false', ava:'', name:'Jerome Seiner', message:"", time:'' },
    {id:5, on:'true', ava:'', name:'Billy Southward', message:"", time:''},
    {id:2, on:'false', ava:'', name:'Dave Curlew', message:"", time:''},
    {id:4, on:'false', ava:'', name:'Jerome Seiner', message:"", time:'' },
    {id:5, on:'true', ava:'', name:'Billy Southward', message:"", time:''},
    {id:6, on:'', ava:'', name:'Alex Leib',  message:"", time:''}
]
    let   messages = [
     {  id:23, on:'false', re:'', message:" Hi, how are you ?", time:'12 sec'},
     {  id:28, on:'true', re:'r', message:"When can we meet ?", time:'4 days'},
     {  id:23, on:'false', re:'', message:" Hi, how are you ?", time:'12 sec'},
     {  id:24, on:'true', re:'', message:"What are you doing tonight ? Want to go take a drink ?", time:'2 min'},
     {  id:27, on:'false', re:'r', message:"Hey Megan ! It's been a while 😃", time:'42 min'},
     {  id:28, on:'true', re:'r', message:"When can we meet ?", time:'4 days'},
     {  id:24, on:'true', re:'', message:"What are you doing tonight ? Want to go take a drink ?", time:'2 min'},
     {  id:28, on:'true', re:'r', message:"When can we meet ?", time:'4 days'},
     {  id:23, on:'false', re:'', message:" Hi, how are you ?", time:'12 sec'},
     {  id:24, on:'true', re:'', message:"What are you doing tonight ? Want to go take a drink ?", time:'2 min'},
     {  id:27, on:'false', re:'r', message:"Hey Megan ! It's been a while 😃", time:'42 min'},
     {  id:28, on:'true', re:'r', message:"When can we meet ?", time:'4 days'},
     {  id:27, on:'false', re:'r', message:"Hey Megan ! It's been a while 😃", time:'42 min'},
     {  id:28, on:'true', re:'r', message:"When can we meet ?", time:'4 days'},
     {  id:23, on:'false', re:'', message:" Hi, how are you ?", time:'12 sec'},
     {  id:24, on:'true', re:'', message:"What are you doing tonight ? Want to go take a drink ?", time:'2 min'},
     {  id:27, on:'false', re:'r', message:"Hey Megan ! It's been a while 😃", time:'42 min'},
     {  id:28, on:'true', re:'r', message:"When can we meet ?", time:'4 days'},
     {  id:29, on:'', re:'', message:"9 pm at the bar if possible 😳", time:'1 days'}
 ]

let dialogElement = dialogs.map( d => <DialogItem id={d.id} on={d.on} ava={d.ava} name={d.name}  message={d.message}  time={d.time}   /> )
let messageElement = messages.map( m => <MessageItem id={m.id} re={m.re}  message={m.message}  time={m.time}   />)
    return (
        <div className={s.container}>
            <div className={s.row}>

                <section className={s.discussions}>
                    <Search/>
                    <div className={s.dialog_list}>
                        {dialogElement}
                    </div>
                </section>
                <section className={s.chat}>
                    <HeaderChat id={dialogs[0].id} on={dialogs[0].on} ava={dialogs[0].ava} name={dialogs[0].name}/>

                    <div className={s.messages_chat}>
                        {messageElement}
                    </div>
                    <FooterChat />
                </section>
            </div>
        </div>
    )
}

const HeaderChat = (props) => {
    return (
        <div className={s.header_chat}>
            <i className={s.ava} aria-hidden="true"></i>
            <p className={s.name}>{props.name}</p>
            <i className={s.icon + " " + s.clickable + " " +  s.right} aria-hidden="true"></i>
        </div>
    )
}

const FooterChat = (props) => {
  return(
      <div className={s.footer_chat}>
          <i className={s.icon + " " + s.clickable} aria-hidden="true"></i>
          <i className={s.icon + " " + s.clickable} aria-hidden="true"></i>
          <input type="text" className={s.write_message} placeholder="Type your message here"></input>
          <i className={s.icon + " " + s.send + " " + s.clickable} aria-hidden="true"></i>
      </div>
  )
}

export default Chat
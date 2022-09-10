import {rerenderTree} from "./Render";

let state = {
    chatPage: {
        newSearchValue: "",
        newMessageValue: "",
        headers: {
            on: 'true', ava: '', name: 'Billy Southward'
        },
        dialogs: [
            {id: 1, on: 'true', ava: '', name: 'Megan Leib', message: "ds", time: '04d 6h'},
            {id: 2, on: 'false', ava: '', name: 'Dave Curlew', message: "", time: 'long'},
            {id: 5, on: '', ava: '', name: 'Billy Southward', message: "", time: '6h'},
            {id: 3, on: 'false', ava: '', name: 'Dave Curlew', message: "", time: '6h'},
            {id: 4, on: '', ava: '', name: 'Jerome Seiner', message: "", time: '6h'},
            {id: 6, on: 'true', ava: '', name: 'Billy Southward', message: "", time: '6h'},
            {id: 7, on: 'false', ava: '', name: 'Dave Curlew', message: "", time: '6h'},
            {id: 8, on: '', ava: '', name: 'Jerome Seiner', message: "", time: '6h'},
            {id: 9, on: 'true', ava: '', name: 'Billy Southward', message: "", time: '6h'},
            {id: 10, on: 'false', ava: '', name: 'Jerome Seiner', message: "", time: '6h'},
            {id: 11, on: 'true', ava: '', name: 'Billy Southward', message: "", time: '6h'},
            {id: 13, on: 'false', ava: '', name: 'Dave Curlew', message: "", time: '6h'},
            {id: 14, on: 'false', ava: '', name: 'Jerome Seiner', message: "", time: '6h'},
            {id: 15, on: 'true', ava: '', name: 'Billy Southward', message: "", time: '6h'},
            {id: 12, on: 'false', ava: '', name: 'Dave Curlew', message: "", time: '6h'},
            {id: 16, on: 'false', ava: '', name: 'Jerome Seiner', message: "", time: '6h'},
            {id: 17, on: 'true', ava: '', name: 'Billy Southward', message: "", time: '6h'},
            {id: 18, on: '', ava: '', name: 'Alex Leib', message: "", time: '6h'}
        ],
        messages: [
            {id: 1, send: 's', message: " Я: добрый вечер", time: '12 sec'},
            {id: 2, send: '', message: "Она: а он добрый?", time: '42 min'},
            {id: 3, send: 'r', message: " Я: конечно, а что не так? ", time: '4 days'},
            {id: 4, send: '', message: "Она: все так. понедельник — день тяжелый ", time: '42 min'},
            {id: 5, send: 'r', message: " Я: это точно. значит выходные были офигенские ", time: '4 days'},
            {id: 6, send: '', message: "  Она: их было очень мало, к сожалению… ", time: '12 sec'},
            {id: 7, send: 'r', message: " Я: чем занимаешься в свободное время?", time: '42 min'},
            {id: 8, send: '', message: " Она: собираю по кусочкам вынесенный на работе мозг", time: '4 days'},
            {id: 9, send: 'r', message: "Я: а на какой работе тебе выносят мозг?", time: '1 days'},
            {id: 10, send: '', message: "Она: ой, пожалуйста, давай не будем о работе", time: '1 days'},
            {id: 11, send: 'r', message: "Я: давай об отдыхе", time: '1 days'}
        ]
    },
    profilePage: {},
    navBarPage: {
        profile: {name: "Oleksandr A.", job: "Web Developer"},
        navList: [
            {title: "Profile", url: "/profile"},
            {title: "Chat", url: "/chat"},
            {title: "Settings", url: "/Settings"},]
    }
}

export let sendMessage = (text) => {
    if (text === '') {
        alert("Неможливо додати пусту Строку  + text");
    } else {
        let ids = state.chatPage.messages.length + 1
        let some = {
            id: ids,
            send: 'r',
            message: text + " - " + ids,
            time: ''
        }
        state.chatPage.messages.push(some);

        state.chatPage.newMessageValue = ""
        rerenderTree(state);
    }
}
export let newMessageText = (newText) => {
    state.chatPage.newMessageValue = newText
    rerenderTree(state);
}

export let newSearchInputText = (newText) => {
    state.chatPage.newSearchValue = newText
    rerenderTree(state);
}

export default state
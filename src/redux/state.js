const UPDATE_MESSAGES_INPUT = 'UPDATE-MESSAGES-INPUT';
const UPDATE_SEARCH_INPUT = 'UPDATE-SEARCH-INPUT';
const SEND_MESSAGES = 'SEND-MESSAGES'
const SEARCH_DIALOG = 'SEARCH-DIALOG'

let store = {
    _state: {
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
                {id: 1, send: 's', message: " Я: добрый вечер", time: ''},
                {id: 2, send: '', message: "Она: а он добрый?", time: ''},
                {id: 3, send: 's', message: " Я: конечно, а что не так? ", time: ''},
                {id: 4, send: '', message: "Она: все так. понедельник — день тяжелый ", time: ''},
                {id: 5, send: 's', message: " Я: это точно. значит выходные были офигенские ", time: ''},
                {id: 6, send: '', message: "  Она: их было очень мало, к сожалению… ", time: ''},
                {id: 7, send: 's', message: " Я: чем занимаешься в свободное время?", time: ''},
                {id: 8, send: '', message: " Она: собираю по кусочкам вынесенный на работе мозг", time: ''},
                {id: 9, send: 's', message: "Я: а на какой работе тебе выносят мозг?", time: ''},
                {id: 10, send: '', message: "Она: ой, пожалуйста, давай не будем о работе", time: ''},
                {id: 11, send: 's', message: "Я: давай об отдыхе", time: ''}
            ]
        },
        profilePage: {},
        navBarPage: {
            profile: {
                name: "Oleksandr A.",
                job: "Web Developer"
            },
            navList: [
                {title: "Profile", url: "/profile"},
                {title: "Chat", url: "/chat"},
                {title: "Settings", url: "/Settings"},]
        }
    },
    _callSubscriber() {
        console.log("Tree updated!")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === SEND_MESSAGES) {
            if (this._state.chatPage.newMessageValue === '') {
                alert("Введіть повідомлення !");
            } else {
                let ids = this._state.chatPage.messages.length + 1
                let some = {
                    id: ids,
                    send: 's',
                    message: this._state.chatPage.newMessageValue,
                    time: ''
                }
                this._state.chatPage.messages.push(some);
                this._state.chatPage.newMessageValue = ""
                this._callSubscriber(this._state);
            }
        } else if (action.type === UPDATE_MESSAGES_INPUT) {
            this._state.chatPage.newMessageValue = action.newText
            console.log(this._state.chatPage.newMessageValue);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_SEARCH_INPUT) {
            this._state.chatPage.newSearchValue = action.newText
            this._callSubscriber(this._state);
        } else if (action.type === SEARCH_DIALOG) {
            if (this._state.chatPage.newSearchValue === '') {
                alert("Введіть запит");
            } else {
                alert(this._state.chatPage.newSearchValue);
            }
        }
    },
}
export const UpdateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_MESSAGES_INPUT, newText: text}
}
export const SendMessageActionCreator = () => {
    return {type: SEND_MESSAGES}
}

window.store = store;
export default store
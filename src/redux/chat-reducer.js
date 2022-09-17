const UPDATE_SEARCH_INPUT = 'UPDATE-SEARCH-INPUT';
const UPDATE_MESSAGES_INPUT = 'UPDATE-MESSAGES-INPUT';
const SEARCH_DIALOG = 'SEARCH-DIALOG'
const SEND_MESSAGES = 'SEND-MESSAGES'

let initialState = {
    newSearchValue: "",
    newMessageValue: "",
    headers: {
        on: 'true', ava: '', name: 'Billy Southward'
    },
    dialogs: [
        { id: 1, on: 'true', ava: '', name: 'Megan Leib', message: "ds", time: '04d 6h' },
        { id: 2, on: 'false', ava: '', name: 'Dave Curlew', message: "", time: 'long' },
        { id: 5, on: '', ava: '', name: 'Billy Southward', message: "", time: '6h' },
        { id: 3, on: 'false', ava: '', name: 'Dave Curlew', message: "", time: '6h' },
        { id: 4, on: '', ava: '', name: 'Jerome Seiner', message: "", time: '6h' },
        { id: 6, on: 'true', ava: '', name: 'Billy Southward', message: "", time: '6h' },
        { id: 7, on: 'false', ava: '', name: 'Dave Curlew', message: "", time: '6h' },
        { id: 8, on: '', ava: '', name: 'Jerome Seiner', message: "", time: '6h' },
        { id: 9, on: 'true', ava: '', name: 'Billy Southward', message: "", time: '6h' },
        { id: 10, on: 'false', ava: '', name: 'Jerome Seiner', message: "", time: '6h' },
        { id: 11, on: 'true', ava: '', name: 'Billy Southward', message: "", time: '6h' },
        { id: 13, on: 'false', ava: '', name: 'Dave Curlew', message: "", time: '6h' },
        { id: 14, on: 'false', ava: '', name: 'Jerome Seiner', message: "", time: '6h' },
        { id: 15, on: 'true', ava: '', name: 'Billy Southward', message: "", time: '6h' },
        { id: 12, on: 'false', ava: '', name: 'Dave Curlew', message: "", time: '6h' },
        { id: 16, on: 'false', ava: '', name: 'Jerome Seiner', message: "", time: '6h' },
        { id: 17, on: 'true', ava: '', name: 'Billy Southward', message: "", time: '6h' },
        { id: 18, on: '', ava: '', name: 'Alex Leib', message: "", time: '6h' }
    ],
    messages: [
        { id: 1, send: 's', message: " Я: добрый вечер", time: '' },
        { id: 2, send: '', message: "Она: а он добрый?", time: '' },
        { id: 3, send: 's', message: " Я: конечно, а что не так? ", time: '' },
        { id: 4, send: '', message: "Она: все так. понедельник — день тяжелый ", time: '' },
        { id: 5, send: 's', message: " Я: это точно. значит выходные были офигенские ", time: '' },
        { id: 6, send: '', message: "  Она: их было очень мало, к сожалению… ", time: '' },
        { id: 7, send: 's', message: " Я: чем занимаешься в свободное время?", time: '' },
        { id: 8, send: '', message: " Она: собираю по кусочкам вынесенный на работе мозг", time: '' },
        { id: 9, send: 's', message: "Я: а на какой работе тебе выносят мозг?", time: '' },
        { id: 10, send: '', message: "Она: ой, пожалуйста, давай не будем о работе", time: '' },
        { id: 11, send: 's', message: "Я: давай об отдыхе", time: '' }
    ]
}

const ChatReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case SEND_MESSAGES:
            if ( state.newMessageValue === '' ) {
                alert( "Введіть повідомлення !" );
            } else {
                let ids = state.messages.length + 1
                let some = {
                    id: ids,
                    send: 's',
                    message: state.newMessageValue,
                    time: ''
                }
                state.messages.push( some );
                state.newMessageValue = ""
            }
            return state;
        case UPDATE_MESSAGES_INPUT :
            state.newMessageValue = action.newText
            return state;
        case    UPDATE_SEARCH_INPUT:
            state.newSearchValue = action.newText
            return state;
        case    SEARCH_DIALOG :
            if (state.newSearchValue === '') {
                alert("Введіть запит");
            } else {
                alert(state.newSearchValue);
            }
            return state;
        default:
            return state;
    }
}

export const UpdateNewMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGES_INPUT, newText: text})
export const UpdateNewSearchTextActionCreator = (text) => ({type: UPDATE_SEARCH_INPUT, newText: text})
export const SearchDialogActionCreator = () => ({type: SEARCH_DIALOG})
export const SendMessageActionCreator = () => ({type: SEND_MESSAGES})

export default ChatReducer;
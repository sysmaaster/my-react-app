const UPDATE_SEARCH_INPUT = 'UPDATE-SEARCH-INPUT';
const UPDATE_MESSAGES_INPUT = 'UPDATE-MESSAGES-INPUT';
const SEARCH_DIALOG = 'SEARCH-DIALOG'
const SEND_MESSAGES = 'SEND-MESSAGES'

const ChatReducer = (state, action) => {
    debugger
    switch (action.type) {

        case SEND_MESSAGES:
            if (state.newMessageValue === '') {
                alert("Введіть повідомлення !");
            } else {
                let ids = state.messages.length + 1
                let some = {
                    id: ids,
                    send: 's',
                    message: state.newMessageValue,
                    time: ''
                }
                state.messages.push(some);
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
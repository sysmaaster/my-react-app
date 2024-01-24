const UPDATE_SEARCH_INPUT = 'UPDATE-SEARCH-INPUT';
const UPDATE_MESSAGES_INPUT = 'UPDATE-MESSAGES-INPUT';
const SEARCH_DIALOG = 'SEARCH-DIALOG';
const SEND_MESSAGES = 'SEND-MESSAGES';

let initialState = {
    newSearchValue: "",
    newMessageValue: "",
    headers: {
        on: 'true', ava: '', name: 'Billy Southward'
    },
    dialogs: [],
    messages: []
};
const ChatReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case SEND_MESSAGES:
            if ( state.newMessageValue === '' ) {
                alert( "Введіть повідомлення !" );
            } else {
                return {
                    ...state,
                    messages: [ ...state.messages, {
                        id: state.messages.length,
                        send: 's',
                        message: state.newMessageValue,
                        time: ''
                    } ],
                    newMessageValue: ""
                }
            }
            return state;
        case UPDATE_MESSAGES_INPUT:
            return { ...state, newMessageValue: action.newText };
        case UPDATE_SEARCH_INPUT:
            return { ...state, newSearchValue: action.newText };
        case SEARCH_DIALOG:
            if ( state.newSearchValue === '' ) {
                alert( "Введіть запит" );
            } else {
                alert( state.newSearchValue );
            }
            return state;
        default:
            return state;
    }
};

export const UpdateNewMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGES_INPUT, newText: text});
export const UpdateNewSearchTextActionCreator = (text) => ({type: UPDATE_SEARCH_INPUT, newText: text});
export const SearchDialogActionCreator = () => ({type: SEARCH_DIALOG});
export const SendMessageActionCreator = () => ({type: SEND_MESSAGES});

export default ChatReducer;
const UPDATE_POST_INPUT = 'UPDATE_POST_INPUT';
const SEND_POST = 'SEND_POST';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
	isFetching: null,
	profile: {},
	textareaNewPost: '',
	posts: [],
	
}


const ProfileReducer = ( state = initialState, action ) => {
	
	switch ( action.type ) {
		case TOGGLE_IS_FETCHING :
			return { ...state, isFetching: action.isFetching }
		case UPDATE_POST_INPUT:
			return { ...state, profile: action.profile }
		case SEND_POST:
			return state
		default :
			return state
	}
}

export const SetUserProfile = ( profile ) => ( { type: UPDATE_POST_INPUT, profile } )
export const SendPost = ( post ) => ( { type: SEND_POST, post } )
export const toggleIsFetching = ( isFetching ) => ( { type: TOGGLE_IS_FETCHING, isFetching } )


export default ProfileReducer;
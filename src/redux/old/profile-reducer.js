const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SEND_POST = 'SEND_POST';
const UPDATE_POST_INPUT = 'UPDATE_POST_INPUT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
	isFetching: true,
	profile: {},
	textareaNewPost: '',
	posts: [],
};

const ProfileReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case FOLLOW:
			return { ...state, profile: { ...state.profile, followed: true } };
		case UNFOLLOW:
			return { ...state, profile: { ...state.profile, followed: false } };
		case TOGGLE_IS_FETCHING :
			return { ...state, isFetching: action.isFetching };
		case UPDATE_POST_INPUT:
			return { ...state, profile: action.profile };
		case SEND_POST:
			return state;
		default :
			return state
	}
};

export const SetUserProfile = ( profile ) => ( { type: UPDATE_POST_INPUT, profile } );
export const SendPost = ( post ) => ( { type: SEND_POST, post } );
export const toggleIsFetching = ( isFetching ) => ( { type: TOGGLE_IS_FETCHING, isFetching } );
export const UnFollow = ( userId ) => ( { type: UNFOLLOW, userId } );
export const Follow = ( userId ) => ( { type: FOLLOW, userId } );

export default ProfileReducer;
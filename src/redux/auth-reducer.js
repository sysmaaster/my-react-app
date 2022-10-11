const SET_AUTHORISE = 'SET_AUTHORISE';
const SET_USER_DATA = 'SET_USER_DATA';
const IN_LOGOUT = 'IN_LOGOUT';

let initialState = {
	isAuthorise: false,
	isFetching: false,
	userId: '',
	email: '',
	login: '',
}

const AuthReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case SET_AUTHORISE:
			return {
				...state,
				isAuthorise: action.status
			}
		case SET_USER_DATA:
			return {
				...state,
				...action.data
			}
		case IN_LOGOUT:
			return state
		
		default:
			return state;
	}
}

export const SetUserData = ( userId, email, login ) => ( { type: SET_USER_DATA, data: { userId, email, login } } )
export const SetInAuthorise = ( status ) => ( { type: SET_AUTHORISE, status } )

export default AuthReducer;

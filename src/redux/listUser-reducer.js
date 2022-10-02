const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT'

let initialState = {
	currentPage: 1,
	totalCount: 0,
	pagesSize: 10,
	users: []
}
const ListUserReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map( u => {
						if ( u.id === action.userId ) {
							return { ...u, followed: true }
						}
						return u
					}
				)
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map( u => {
						if ( u.id === action.userId ) {
							return { ...u, followed: false }
						}
						return u
					}
				)
			}
		case SET_USERS:
			return { ...state, users: action.users }
		case CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }
		case TOTAL_COUNT:
			return { ...state, totalCount: action.totalCount }
		default:
			return state
	}
}

export const UnFollowAC = ( userId ) => ( { type: UNFOLLOW, userId } )
export const FollowAC = ( userId ) => ( { type: FOLLOW, userId } )
export const SetUsersAC = ( users ) => ( { type: SET_USERS, users } )
export const TotalCountAC = ( totalCount ) => ( { type: TOTAL_COUNT, totalCount } )
export const CurrentPageAC = ( currentPage ) => ( { type: CURRENT_PAGE, currentPage } )

export default ListUserReducer;
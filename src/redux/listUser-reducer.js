const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
		/*{
		 id: 0,
		 name: 'Billy Southward',
		 followed: false,
		 status: 'Am a BOSS!',
		 locations: { country: 'Ukraine', city: 'Lviv' }
		 },
		 {
		 id: 1,
		 name: 'Emma Thwart',
		 followed: true,
		 status: 'Am For what reason',
		 locations: { country: 'Ukraine', city: 'Franks' }
		 },
		 {
		 id: 2,
		 name: 'Ted Soured',
		 followed: false,
		 status: 'Am a BOSS!',
		 locations: { country: 'Ukraine', city: 'Lviv' }
		 },*/
	]
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
			return { ...state, users: [ ...state.users, ...action.users ] }
		default:
			return state
	}
}

export const UnFollowAC = ( userId ) => ( { type: UNFOLLOW, userId } )
export const FollowAC = ( userId ) => ( { type: FOLLOW, userId } )
export const SetUsersAC = ( users ) => ( { type: SET_USERS, users } )

export default ListUserReducer;
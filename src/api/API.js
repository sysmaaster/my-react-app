import axios from "axios";

const instanse = axios.create( {
	withCredentials: true,
	headers: { sa: 6 },
	baseURL: 'http://192.168.3.100:1880/'
} )








export const usersAPI = {
	getUsers( currentPage, pagesSize ) {
		return instanse.get( `users?page=${currentPage}&count=${pagesSize}` )
			.then( response => response.data )
	},
	getUserProfile( userId ) {
		return instanse.get( `profile/${userId}` )
			.then( response => response.data )
	},
}

export const authAPI = {
	checkToken() {
		return instanse.get( `auth/me` )
			.then( response => response.data )
	},
}

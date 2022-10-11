import chatReducer from "./chat-reducer";
import navBarReducer from "./navBar-reducer";
import profileReducer from "./profile-reducer";
import { combineReducers, legacy_createStore as createStore } from "redux";
import ListUserReducer from "./listUser-reducer";
import AuthReducer from "./auth-reducer";

let reducers = combineReducers( {
	chatPage: chatReducer,
	navBarPage: navBarReducer,
	profilePage: profileReducer,
	userList: ListUserReducer,
	auth: AuthReducer
} )

let store = createStore( reducers );

window.store = store;
export default store

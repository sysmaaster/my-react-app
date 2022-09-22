import chatReducer from "./chat-reducer";
import navBarReducer from "./navBar-reducer";
import profileReducer from "./profile-reducer";
import { combineReducers, legacy_createStore as createStore } from "redux";
import ListUserReducer from "./listUser-reducer";

let reducers = combineReducers( {
	chatPage: chatReducer,
	navBarPage: navBarReducer,
	profilePage: profileReducer,
	userList: ListUserReducer,
} )

let store = createStore( reducers );

window.store = store;
export default store

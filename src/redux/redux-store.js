import chatReducer from "./chat-reducer";
import navBarReducer from "./navBar-reducer";
import profileReducer from "./profile-reducer";
import { combineReducers, legacy_createStore as createStore } from "redux";

let reducers = combineReducers( {
	chatPage: chatReducer,
	navBarPage: navBarReducer,
	profilePage: profileReducer
} )

let store = createStore( reducers );

window.store = store;
export default store

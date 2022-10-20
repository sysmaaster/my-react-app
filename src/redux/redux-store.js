import chatReducer from "./chat-reducer";
import navBarReducer from "./navBar-reducer";
import profileReducer from "./profile-reducer";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import ListUserReducer from "./listUser-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers( {
	chatPage: chatReducer,
	navBarPage: navBarReducer,
	profilePage: profileReducer,
	userList: ListUserReducer,
	auth: AuthReducer
} )

let store = createStore( reducers, applyMiddleware( thunkMiddleware ) );

window.store = store;
export default store

import profileReducer from "./profile-reducer";
import navBarReducer from "./navBar-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";


let reducers = combineReducers( {
	navBarPage: navBarReducer,
	profilePage: profileReducer,
	auth: AuthReducer
} )

let store = createStore( reducers, applyMiddleware( thunkMiddleware ) );

window.store = store;
export default store
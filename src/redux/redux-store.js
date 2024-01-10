import navBarReducer from "./navBar-reducer";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  navBarPage: navBarReducer,
  auth: AuthReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;

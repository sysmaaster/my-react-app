import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./auth-reducer";
import NavBarReducer from "./nav-bar-reducer";
import WalletReducer from "./wallet-reducer";

let reducers = combineReducers({
  navBar: NavBarReducer,
  auth: AuthReducer,
  wallet: WalletReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;

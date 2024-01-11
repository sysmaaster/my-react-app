import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./auth-reducer";
import HeaderReducer from "./header-reducer";
import WalletrReducer from "./wallet-reducer";

let reducers = combineReducers({
  header: HeaderReducer,
  auth: AuthReducer,
  wallet: WalletrReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;

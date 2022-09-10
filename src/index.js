import reportWebVitals from './reportWebVitals';
import {rerenderTree} from "./redux/Render";
import state from "./redux/state";

rerenderTree(state);


reportWebVitals();

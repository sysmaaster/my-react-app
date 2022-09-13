import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

export const rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderTree(store.getState());

store.subscribe(rerenderTree);
reportWebVitals();

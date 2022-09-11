import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

export const rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={store.getState()}
                 newMessageText={store.newMessageText.bind(store)}
                 sendMessage={store.sendMessage.bind(store)}
                 newSearchInputText={store.newSearchInputText.bind(store)}
                 searchDialog={store.searchDialog.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderTree();
store.subscribe(rerenderTree);
reportWebVitals();

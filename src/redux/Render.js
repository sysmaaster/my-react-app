import React from 'react';
import ReactDOM from 'react-dom';
import App from "../App";
import '../index.css';
import {newMessageText, newSearchInputText, sendMessage} from "./state";
import {BrowserRouter} from "react-router-dom";

export const rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}
                 newMessageText={newMessageText}
                 sendMessage={sendMessage}
                 newSearchInputText={newSearchInputText}/>
        </BrowserRouter>, document.getElementById('root'));
}

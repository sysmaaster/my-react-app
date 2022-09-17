import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";

export const rerenderTree = ( state ) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}
                 dispatch={store.dispatch.bind( store )}/>
        </BrowserRouter>, document.getElementById( 'root' ) );
}
rerenderTree( store.getState() );

window.store = store.getState();
store.subscribe( () => {
    let state = store.getState();
    rerenderTree( state );
} );

reportWebVitals();

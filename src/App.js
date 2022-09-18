import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Headers';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Profiles from "./components/Profile/Profiles";
import ChatContainer from "./components/Chat/ChatContainer";

const App = (props) => {
    return (
        <div className="App_grid">
            <Header/>
            <NavBar state={props.appState.navBarPage}/>
            <div className="App_Container">
                <Routes>
                    <Route path="/profile/*"
                           element={<Profiles state={props.appState.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path="/chat/*" element={<ChatContainer
                        state={props.appState.chatPage}
                        dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
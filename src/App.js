
import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from './components/Header/Headers';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Chat from "./components/Chat/Chat";
import Profiles from "./components/Profile/Profiles";
const App = (props) => {
    return (

            <div className="App_grid">
                <Header/>
                <NavBar state={props.appState.navBarPage}/>

                <div className="App_Container">
                    <Routes>
                        <Route path="/profile/*" element={<Profiles state={props.appState.profilePage}/>}/>
                        <Route path="/chat/*" element={<Chat state={props.appState.chatPage}
                                                             newMessageText={props.newMessageText}
                                                             sendMessage={props.sendMessage}
                                                             newSearchValue={props.newSearchValue}
                                                             newSearchInputText={props.newSearchInputText}/>}/>
                    </Routes>
                </div>

                <Footer/>

            </div>
    );
}

export default App;
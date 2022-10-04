import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Headers';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ChatContainer from "./components/Chat/ChatContainer";
import ListContainer from "./components/ListUsers/ListContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className="App_grid">
            <Header/>
            <NavBar/>{/* //state={props.appState.navBarPage}*/}
            <div className="App_Container">
                <Routes>
                    <Route path="/profile/*" element={<ProfileContainer/>}/>
                    <Route path="/listUsers" element={<ListContainer/>}/>
                    <Route path="/chat/*" element={<ChatContainer/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
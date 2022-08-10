
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Headers';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Chats from "./components/Chat/Chats";
import Profiles from "./components/Profile/Profiles";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App_grid">
                <Header/>
                <NavBar/>

                <div className="App_Container">
                    <Routes>
                        <Route path="/profile" element={<Profiles/>}/>
                        <Route path="/chat" element={<Chats/>}/>
                    </Routes>
                </div>

                <Footer/>

            </div>
        </BrowserRouter>
    );
}

export default App;
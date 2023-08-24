import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderComponent";

const App = (props) => {
    return (
        <div className="App_grid">
            {/*<HeaderComponent/>*/}
            {/*<NavBar/> //state={props.appState.navBarPage}*/}
            <div className="App_Container">
                <Routes><Route path="/profile" element={<ProfileContainer/>}/>
                  {/*  <Route path="/profile">
                        <Route path=":userId" element={<ProfileContainer/>}/>
                    </Route>*/}
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
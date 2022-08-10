import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Headers';
import Footer from './components/Footer/Footer';
import Dashboard from "./components/Dashboard/Dashboard";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App_grid">

                <Header/>

                <div className="App_Container">
                        <Routes>
                            <Route path="/panel" element={<Dashboard name='panel' />}/>
                            <Route path="/exes" element={<Dashboard name='exes' />}/>
                            <Route path="/income" element={<Dashboard name='income' />}/>
                            <Route path="/analysis" element={<Dashboard name='analysis' />}/>
                            <Route path="/budget" element={<Dashboard name='budget' />}/>
                        </Routes>

                    {/*<Route path="/income" element={}/>*/}
                </div>

                <Footer/>

            </div>
        </BrowserRouter>
    );
}

export default App;
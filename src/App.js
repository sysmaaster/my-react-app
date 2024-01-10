import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HeaderComponent from "./components/Header/Headers";
import Dashboard from "./components/Dashboard/Dashboard";

const App = (props) => {
  return (
    <div className="App_grid">
      <HeaderComponent />
      {/* //state={props.appState.navBarPage}*/}
      <div className="App_Container">
        <Routes>
          <Route path="/panel" element={<Dashboard name="panel" />} />
          <Route path="/exes" element={<Dashboard name="exes" />} />
          <Route path="/income" element={<Dashboard name="income" />} />
          <Route path="/analysis" element={<Dashboard name="analysis" />} />
          <Route path="/budget" element={<Dashboard name="budget" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

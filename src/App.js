import "./App.css";
import React, {useState} from "react";
import HeaderComponent from "./components/Header/Headers";
import WalletContainer from "./components/Wallet/WallerContainer";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  const [isOpen, setOpen] = useState();
  const setbtn = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="container">
      <main>
        <header>
          <button className="menu-btn" onClick={() => setbtn()}>
            <i className="material-symbols-outlined">menu</i>
          </button>
          <h5>
            Hello <b>sysMaaster</b>, welcome back!
          </h5>
        </header>
        
        < WalletContainer/>
        {/*
        <div className="separator">
          <div className="info">
            <h3>Wallets</h3>
            <a href="#">View All</a>
          </div>
          <div className="search">
            <i className="bx bx-search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="analytics">
          <div className="item">
            <div className="progress">
              <div className="info">
                <h5>Locations</h5>
                <p>35 Lessons</p>
              </div>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="{75}"
                aria-valuemin="{0}"
                aria-valuemax="{100}"
              />
            </div>
            <i className="bx bx-map-pin" />
          </div>
          <div className="item">
            <div className="progress">
              <div className="info">
                <h5>People</h5>
                <p>30 Lessons</p>
              </div>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="{75}"
                aria-valuemin="{0}"
                aria-valuemax="{100}"
              />
            </div>
            <i className="bx bx-user-voice" />
          </div>
          <div className="item">
            <div className="progress">
              <div className="info">
                <h5>Airport</h5>
                <p>45 Lessons</p>
              </div>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="{75}"
                aria-valuemin="{0}"
                aria-valuemax="{100}"
              />
            </div>
            <i className="bx bxs-plane-land" />
          </div>
          <div className="item">
            <div className="progress">
              <div className="info">
                <h5>Places</h5>
                <p>20 Lessons</p>
              </div>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="{75}"
                aria-valuemin="{0}"
                aria-valuemax="{100}"
              />
            </div>
            <i className="bx bxs-castle" />
          </div>
        </div>
        <div className="separator">
          <div className="info">
            <h3>Planning</h3>
            <a href="#">View All</a>
          </div>
          <input type="date" defaultValue="2024-01-01" />
        </div>
        <div className="planning">
          {/*<div className="item">
            <div className="left">
              <div className="icon">
                <i className="bx bx-book-alt" />
              </div>
              <div className="details">
                <h5>Reading - Topic 1</h5>
                <p>8:00 - 10:00</p>
              </div>
            </div>
            <i className="bx bx-dots-vertical-rounded" />
          </div>*/}
        {/*<RECORDCONTENT/>}
        </div>
*/}
      </main>
      {/* <aside className="right-section">
        {/*<RIGHT_SECTION />
      </aside>

       <div className="App_grid">
       //state={props.appState.navBarPage}
      <div className="App_Container">
        <Routes>
          <Route path="/" element={<DEV name="HOM" />} />
          <Route path="/panel" element={<Dashboard name="panel" />} />
          <Route path="/exes" element={<Dashboard name="exes" />} />
          <Route path="/income" element={<Dashboard name="income" />} />
          <Route path="/analysis" element={<Dashboard name="analysis" />} />
          <Route path="/budget" element={<Dashboard name="budget" />} />
        </Routes>
      </div>*/}
      
      
      <HeaderComponent
        setOpen={setOpen}
        isOpen={isOpen}
        setbtn={setbtn}
      />
      
      
      <Footer/>
    </div>
  );
};

export default App;

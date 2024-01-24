import React, { useState } from 'react';
import s from './Headers.module.css';
import AdContent from "./AdContent/AdContent";
import NavBarContainer from "./NavBar/NavBarContainer";
const img = require ('./assets/logo.png');

const Header = (props) => {
  return (
         <aside className={`left-section ${ props.isOpen ? "left-section-show" : ""}`}>
        <div className="logo">
          <button className="menu-btn" onClick={() =>props.setbtn()}>
            <i className="bx bx-log-out-circle" />
          </button>
          <img src={img}  alt=""/>
          <a href="#">MoneFLY</a>
        </div>

      <NavBarContainer  />
        
        {/*<AdContent />*/}
        
      </aside>
    );
};
export default Header
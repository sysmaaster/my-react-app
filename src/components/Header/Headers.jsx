import React, { useState } from 'react';
import s from './Headers.module.css';
import NavBar from "./NavBar/NavBar";
import AdContent from "./AdContent/AdContent";
const img = require ('./assets/logo.png')

const Header = (props) => {
  return (
         <aside className={`left-section ${ props.isOpen ? "left-section-show" : ""}`}>
        <div className="logo">
          <button className="menu-btn" onClick={() =>props.setbtn()}>
            <i className="bx bx-log-out-circle" />
          </button>
          <img src={img} />
          <a href="#">MoneFLY</a>
        </div>

      <NavBar NavItem={props.NavItem} />
        
        {/*<AdContent />*/}
        
      </aside>
    );
}
export default Header
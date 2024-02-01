import React from 'react';
import s from './Headers.module.css';
import NavBarContainer from "./NavBar/NavBarContainer";
import {iconsComponent} from "../common/icons/icoComponent";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  
  return (
         <aside className={`left-section ${ props.isOpen ? "left-section-show" : ""}`}>
        <div className="logo">
          <button className="menu-btn" onClick={() => props.setbtn()}>
            <span className="material-symbols-outlined" style={{color: "#369fff"}}>hide</span>
          </button>
          <img src={iconsComponent("logo")} alt=""/>
          <NavLink to="/">MoneyFLY</NavLink>
        </div>
      <NavBarContainer  />
        {/*<AdContent />*/}
      </aside>
    );
};
export default Header
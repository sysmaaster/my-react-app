import React from 'react';
import s from './NavBar.module.css';

const NavBar = () => {
    return (
      <div className={s.NavBar}>
        
      {"тут я NavBar<<<"} 

        <div><a>Home</a></div>  
        <div><a>Profile</a></div>  
        <div><a>Contact</a></div>  
        <div><a>Settings</a></div>  
        <div> <a>About As</a></div>  
        <div><a>Entri</a></div>  
        
      </div>
    );
  }
  export default NavBar
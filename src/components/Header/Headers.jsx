import React from 'react';
import NavBarContainer from "./NavBar/NavBarContainer";

const Header = (props) => {
  
  return (
         <aside className={`left-section ${ props.isOpen ? "left-section-show" : ""}`}>
           <div className="logo">
             <span style={{backgroundColor: "green", padding: "5px", borderRadius: "50px"}}
                   className="material-symbols-outlined">add</span>
             <span style={{backgroundColor: "red", padding: "5px", borderRadius: "50px"}}
                   className="material-symbols-outlined">remove</span>
           </div>
           <NavBarContainer/>
           {/*<AdContent />*/}
      </aside>
    );
};
export default Header
import React from 'react';
import NavItem from './NavItem';
import {connect} from "react-redux";
// eslint-disable-next-line
import s from './NavBar.module.css';

const NavBar = (props) => {
  return (
    <ul className="sidebar">
      { props.navList.map( (i) => { return <NavItem url={i.url} title={i.title}  icons={i.icons}/>   } ) }
		</ul>
    );
};

const mapStateToProps = (state) => {
return {
    navList : state.navBar.navList
}
};
const mapDispatchToProps = (state) => {
    return { }

};

const NavBarContainer = connect(mapStateToProps,mapDispatchToProps)(NavBar);
export default NavBarContainer
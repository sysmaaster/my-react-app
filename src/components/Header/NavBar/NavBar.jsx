import React from 'react';
import s from './NavBar.module.css';
import NavItem from './NavItem';

const NavBar = (props) => {
  return (
    <ul className="sidebar">
      { props.NavItem.map( (i) => { return <NavItem url={i.url} title={i.title}  icons={i.icons}/>   } ) }
		</ul>
    );
}
export default NavBar
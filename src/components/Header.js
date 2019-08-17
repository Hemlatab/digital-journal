import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
 const Header = () => {

    return(
     
        <header className="header">
        <h1><Link to="/">Digital Journal </Link></h1>
      <nav className="navbar">
        <ul>
          <li><Link to="/LoginForm">Log In </Link></li>
          <li><Link to="/SignupForm">Sign Up</Link></li>
        </ul>
      </nav>
        </header>

   
    );
}

export default Header;
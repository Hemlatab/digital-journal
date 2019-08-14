import React from 'react';
import './Header.css';

function Header(){

    return(
        <header className="header">
        <h1>Digital Journal <span className="create-note-title">| Create A Note</span></h1>
      <nav className="navbar">
        <ul>
          <li><a href="./LoginForm.js">Log In </a>
          <a href="./SignupForm.js">Sign Up</a></li>
        </ul>
      </nav>
        </header>
    )
}

export default Header
import React from 'react';

function Header(){

    return(
        <header>
        <h1>Digital Journal <span className="create-note-title">| Create A Note</span></h1>
      <nav className="navbar">
        <ul>
          <li><a href="./LoginForm.js">Log In</a></li>
          <li><a href="./SignupForm.js">Sign Up</a></li>
        </ul>
      </nav>
        </header>
    )
}

export default Header
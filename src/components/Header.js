import React from 'react';
import { returnStatement } from '@babel/types';

function Header(){

    return(
        <React.Fragment>
        <h1>Digital Journal <span className="create-note-title">| Create A Note</span></h1>
      <nav className="navbar">
        <ul>
          <li><a href="./LoginForm.js">Log In</a></li>
          <li><a href="./SignupForm.js">Sign Up</a></li>
        </ul>
      </nav>
        </React.Fragment>
    )
}
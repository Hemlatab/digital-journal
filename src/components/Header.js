import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './Header.css';

 const Header = () => {

    return(
      <Router>
        <header className="header">
        <h1>Digital Journal <span className="create-note-title">| Create A Note</span></h1>
      <nav className="navbar">
        <ul>
          <li><Link to="/LoginForm">Log In </Link></li>
          <li><Link to="/SignupForm">Sign Up</Link></li>
        </ul>
      </nav>
        </header>
        <Route path="/LoginForm" component={LoginForm} />
        <Route path="/SignupForm" component={SignupForm} />
     </Router>
    );
}

export default Header;
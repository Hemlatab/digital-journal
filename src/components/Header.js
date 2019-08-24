import React from 'react';
import Firebase from '../components/Firebase';
import './Header.css';
import {Link} from 'react-router-dom';

//const user = false;

 class Header extends React.Component{
  state={
    isAuthenticated:false
  }
 
  render(){
  console.log(Firebase.getCurrentUsername())
    return(
     
        <header className="header">
        <h1><Link to="/">Digital Journal </Link></h1>
        <nav className="navbar">
        <ul>
          {this.state.isAuthenticated?(<button type="button">Logout</button>):(
         <>
        <li><Link to="/LoginForm">Log In </Link></li>
        <li><Link to="/SignupForm">Sign Up</Link></li>
        </>
          )}
        
        </ul>
      </nav>
        </header>

   
    );
}
 }

export default Header;
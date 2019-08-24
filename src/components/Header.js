import React from 'react';
import Firebase from '../components/Firebase';

import './Header.css';
import {Link,withRouter} from 'react-router-dom';

//const user = false;

 const Header =()=>{
  
    const user=Firebase.getCurrentUsername()
const logout = () => {

    Firebase.auth.signOut()
}
    return(
     
        <header className="header">
        <h1><Link to="/">Digital Journal </Link></h1>
        <nav className="navbar">
        <ul>
          {user?(<button type="button" onClick={logout}>Logout</button>):(
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
 

export default withRouter (Header);
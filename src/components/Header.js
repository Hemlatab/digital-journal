import React from 'react';
import Firebase from '../components/Firebase';
import './Header.css';
import {Link,withRouter} from 'react-router-dom';
//const user = false;

 const Header =(props) => {

    const logout = async () => {

        await Firebase.auth.signOut()
    
        props.history.push("/LoginForm")

    }   
          


    return(
     
        <header className="header">
        <h1><Link to="/">Digital Journal </Link></h1>
        <nav className="navbar">
        <ul>
          {!Firebase.getCurrentUsername()?( <>
        <li><Link to="/LoginForm">Log In </Link></li>
        <li><Link to="/SignupForm">Sign Up</Link></li>
        </>):(
            <>
            <span className="username">Welcome, {Firebase.getCurrentUsername()} </span>
            <button  className="logout" type="button" onClick={logout}>Logout</button>
            </>
          )}
        
        </ul>
      </nav>
        </header>

   
    );
    }

 

export default withRouter (Header);
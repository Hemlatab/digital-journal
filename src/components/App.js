import React from 'react';
import './App.css';
import LoginForm from './LoginForm';


function App() {
  return (
    <div className="App">
      <h1>Digital Journal <span className="create-note-title">| Create A Note</span></h1>
      <nav className="navbar">
        <ul>
          <li><a href="./LoginForm.js">Log In</a></li>
          <li><a href="./SignupForm.js">Sign Up</a></li>
        </ul>
      </nav>
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;




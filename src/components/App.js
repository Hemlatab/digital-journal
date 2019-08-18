import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Home from './Home';
//import Footer from './Footer';
import Header from './Header';

function App() {

  return (
    <Router>
      
    <div className="App">
      <Header />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/LoginForm" component={LoginForm} />
      <Route path="/SignupForm" component={SignupForm} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
//



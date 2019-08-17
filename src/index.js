import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Header from './components/Header';
import './index.css';

const routing =(
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={App} />
            <Route path="/LoginForm" component={LoginForm} />
            <Route path="/SignupForm" component={SignupForm} />
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById("root"))


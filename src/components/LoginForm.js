import React from 'react';
import LoginForm from './src/components/LoginForm';
import App from './components/App';

class LoginForm extends React.Component{
        render(){
            return(
            <React.Fragment className="login-form">
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>
            <a href="#">Login</a>
            <button>Submit</button>
            </React.Fragment>
        );
} 
}
default export LoginForm;
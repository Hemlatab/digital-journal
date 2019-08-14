import React from 'react';

class LoginForm extends React.Component{
    state={
        username:'',
        password:''
    }
        render(){
            return(
            <React.Fragment className="login-form">
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <a href="#">Login</a>
            <button className="login-submit-btn">Submit</button>
            </React.Fragment>
        );
} 
}
 export default LoginForm;

 //create 2 properties in state and write handlechange for 2 inputs
 //update username/password in state onchange event
 //sign create 1 prop in state[{username,pwd} for evevry input field
 
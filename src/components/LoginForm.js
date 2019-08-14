import React from 'react';
import './LoginForm.css';
class LoginForm extends React.Component{
    state={
        username:'',
        password:''
    }
        render(){
            
            return(
            <React.Fragment className="login-form">
            <p><input type="text" placeholder="Username" onChange={this.username}/></p>
            <p><input type="password" placeholder="Password" onChange={this.password}/></p>
            <button className="login-submit-btn">Login</button>
            </React.Fragment>
        );
} 
}
 export default LoginForm;

 //create 2 properties in state and write handlechange for 2 inputs
 //update username/password in state onchange event
 //sign create 1 prop in state[{username,pwd} for evevry input field
 
import React from 'react';
import './LoginForm.css';
class LoginForm extends React.Component{
    state={
        username:'',
        password:''
    }
        render(){
            
            return(
            <div className="login-form">
            <form>
            <h2>Login</h2>
            <p><input className="input-field" type="text" placeholder="Username" onChange={this.username}/></p>
            <p><input className="input-field"  type="password" placeholder="Password" onChange={this.password}/></p>
            <button className="login-submit-btn">Login</button>
            </form>
            </div>
        );
} 
}


 export default LoginForm;

 
 
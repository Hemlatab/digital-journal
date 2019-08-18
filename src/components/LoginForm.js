import React from 'react';
import './LoginForm.css';
class LoginForm extends React.Component{
    state={
        username:'',
        password:''
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state);
    }
        render(){
            
        const {username,password} = this.state
            return(
            <div className="login-form">
            <form onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <p><input className="input-field" name="username" value={username} type="text" placeholder="Username" onChange={this.handleChange} required /></p>
            <p><input className="input-field"  name="password" value={password} type="password" placeholder="Password" onChange={this.handleChange} required /></p>
            <button type="submit" className="login-submit-btn">Login</button>
            </form>
            </div>
        );
} 
}


 export default LoginForm;

 
 
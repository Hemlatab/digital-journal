import React from 'react';
import './LoginForm.css';
import Input from './Input';
import Button from './Button';
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
            <Input type="text" name="username" value={username} placeholder="Username" handleChange={this.handleChange} required />
            <Input type="password" name="password" value={password} placeholder="Password" handleChange={this.handleChange} required />
            <Button label="Login" />
            </form>
            </div>
        );
} 
}


 export default LoginForm;

 
 
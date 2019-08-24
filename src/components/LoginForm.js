import React from 'react';
import Firebase from './Firebase';
import {withRouter} from 'react-router-dom';
import './LoginForm.css';
import Input from './Input';
import Button from './Button';


class LoginForm extends React.Component{
    state={
        email:'',
        password:'',
        isLoggedIn:false
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = async(event)=>{

        event.preventDefault();

        if (this.state.email.length !==0 && this.state.password.length !==0){

        try{
            await Firebase.login(this.state.email,this.state.password)
            this.setState({isLoggedIn:true})
            
            this.props.history.replace('/')
        }
        catch(error){
            alert(error.message)
        }
        console.log(Firebase.getCurrentUsername());
    }
    }
        render(){
            
        const {email,password} = this.state
            return(
            <div className="login-form">
            <form onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <Input type="text" name="email" value={email} placeholder="Email" handleChange={this.handleChange} required />
            <Input type="password" name="password" value={password} placeholder="Password" handleChange={this.handleChange} required />
            <Button label="Login" disabled={this.state.isLoggedIn}/>
            </form>
            </div>
        );
} 
}


 export default withRouter(LoginForm);

 
 
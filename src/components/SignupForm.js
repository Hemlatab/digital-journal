import React from 'react';
import './SignupForm.css';

class SignupForm extends React.Component{
//controlled forms
    state={
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    handleChange = (event)=>{

        this.setState({[event.target.name]:event.target.value})
        
    }

    handleSubmit = (event)=>{
        event.preventDefault();
console.log(this.state);
    }
            render(){
                const {firstname,lastname,email,password,confirmPassword} = this.state
                return(

                    <div className="signup-form">
                    <form onSubmit={this.handleSubmit}>
                    <h2>Signup</h2>
                        <p><input className="input-field" type="text" name="firstname" value={firstname} placeholder="Firstname" onChange={this.handleChange} required /></p>
                        <p><input className="input-field" type="text" name="lastname" value={lastname} placeholder="Lastname" onChange={this.handleChange} required /></p>
                        <p><input className="input-field" type="text" name="email" value={email} placeholder="Email" onChange={this.handleChange} required /></p>
                        <p><input className="input-field" type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange} required /></p>
                        <p><input className="input-field" type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm Password" onChange={this.handleChange} required /></p>
                        <button type="submit" className="register-btn">Signup</button>
                        </form>
                    </div>
                )
            }
}

export default SignupForm;
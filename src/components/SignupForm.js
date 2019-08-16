//for forms write class components
//card and app functional component
import React from 'react';
import './SignupForm.css';

class SignupForm extends React.Component{

    state={
        username:'',
        email:'',
        password:''
    }
            render(){
                return(
                    <React.Fragment className="signup-form">
                    <h2>Register</h2>
                        <p><input type="text" placeholder="Username" onChange={this.username}/></p>
                        <p><input type="text" placeholder="Email" onChange={this.email}/></p>
                        <p><input type="text" placeholder="Password" onChange={this.password}/></p>
                        <button className="register-btn">Register</button>

                    </React.Fragment>
                )
            }
}

export default SignupForm
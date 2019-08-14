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
                        <input type="text" placeholder="Username" onChange={this.username}/><br />
                        <input type="text" placeholder="Email" onChange={this.email}/><br />
                        <input type="text" placeholder="Password" onChange={this.password}/><br />
                        <button className="register-btn">Register</button>

                    </React.Fragment>
                )
            }
}

export default SignupForm
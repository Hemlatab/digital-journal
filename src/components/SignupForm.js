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
                    <div className="signup-form">
                    <form>
                    <h2>Signup</h2>
                        <p><input className="input-field" type="text" placeholder="Username" onChange={this.username}/></p>
                        <p><input className="input-field" type="text" placeholder="Email" onChange={this.email}/></p>
                        <p><input className="input-field" type="text" placeholder="Password" onChange={this.password}/></p>
                        <button className="register-btn">Signup</button>
                        </form>
                    </div>
                )
            }
}

export default SignupForm
import React from 'react';
import Firebase from './Firebase';
import {withRouter} from 'react-router-dom';
import Button from './Button';
import './SignupForm.css';
import Input from './Input';

class SignupForm extends React.Component{
//controlled forms
    state={
        fullname:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    handleChange = (event)=>{

        this.setState({[event.target.name]:event.target.value})
        
    }

    handleSubmit =  async (event)=>{

        event.preventDefault();

        try{
            await Firebase.register(this.state.fullname,this.state.email,this.state.password)
    
        }
        catch(error){
            alert(error.message)
        }
    
    }
            render(){
                const {fullname,email,password,confirmPassword} = this.state
                return(

                    <div className="signup-form">
                    <form onSubmit={this.handleSubmit}>
                    <h2>Signup</h2>
                    
                       <Input type="text" name="fullname" value={fullname} placeholder="Fullname" handleChange={this.handleChange} required />
                       <Input type="email" name="email" value={email} placeholder="Email" handleChange={this.handleChange} required />
                       <Input type="password" name="password" value={password} placeholder="Password" handleChange={this.handleChange} required />
                       <Input type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm Password" handleChange={this.handleChange} required />
                      <Button label="Signup"/>
                        </form>
                    </div>
                )
            }


}

export default withRouter (SignupForm);
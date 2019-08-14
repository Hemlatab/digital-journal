//for forms write class components
//card and app functional component
import React from 'react';

class SignupForm extends React.Component{

            render(){
                return(
                    <React.Fragment className="signup-form">
                        <input type="text" placeholder="Username" /><br />
                        <input type="text" placeholder="Email" /><br />
                        <input type="text" placeholder="Password" /><br />
                        <button className="register-btn">Register</button>

                    </React.Fragment>
                )
            }
}

export default SignupForm
//for forms write class components
//card and app functional component
import React from 'react';

class SignupForm extends React.Component{

            render(){
                return(
                    <React.Fragment className="signup-form">
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button>Register</button>

                    </React.Fragment>
                )
            }
}

export default SignupForm
import React from 'react';
import './Input.css';

const Input = (props)=>{

return(

<input className="input-field" 
type={props.type} 
name={props.name} 
value={props.value} 
placeholder={props.placeholder} 
onChange = {props.handleChange} 
required />
)
}

export default Input;

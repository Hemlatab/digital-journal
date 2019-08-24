import React from 'react';
import './Button.css';

const Button = (props)=>{

    return(

        <button type="submit" disabled={props.disabled} className="submit-post-btn">{props.label}</button>
    )
}

export default Button;
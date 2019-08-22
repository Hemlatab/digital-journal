import React from 'react';
import './Button.css';

const Button = (props)=>{

    return(

        <button type="submit" className="submit-post-btn">{props.label}</button>
    )
}

export default Button;
//generate this data from the array inside state
import React from 'react';
import './JournalCard.css';

const JournalCard =(props) => {

//destructure
    const {title,body,handleDelete,id,handleUpdate} = props;

        return(
            <div className="note-card">
                <h2>{title}</h2>
                <p>{body}</p>
                <ul>
                    <li className="edit">
                    <button type="button" 
                    className="edit"
                    onClick={()=>handleUpdate(id)}>Edit</button></li>

                    <li className="delete">
                    <button type="button" 
                    className="delete"
                    onClick={()=> handleDelete(id)}>Delete</button></li>
                </ul>
            </div>
        )
    }


export default JournalCard;
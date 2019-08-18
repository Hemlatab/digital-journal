//generate this data from the array inside state
import React from 'react';
import './JournalCard.css';

const JournalCard =(props) => {

//destructure
    const {title,body} = props;

        return(
            <div className="note-card">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        )
    }


export default JournalCard;
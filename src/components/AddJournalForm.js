import React from "react";
import Button from "./Button";
import './AddJournalForm.css';

const AddJournalForm =(props)=>{

    
        const {handleChange,handleSubmit,title,body} = props
        return(
            <form onSubmit={handleSubmit}>
                <h2 class="note-title">Create a Note</h2>
                <input type="text" className="journal-title" name="title" value={title} onChange={handleChange} placeholder="Title"/>
                <textarea rows="5" placeholder="Body" name="body" value={body} onChange={handleChange}></textarea>
                <p className="body-para">Use the form above to create a post. Make sure you fill the required title and body field and then press submit.</p>
                <Button label="Submit"/>
            </form>
        )
    
}
export default AddJournalForm;

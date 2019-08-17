import React from "react";
import './AddJournalForm.css';

class AddJournalForm extends React.Component{

    state ={
        title:'',
        body:''
    }

    handleChange = (event) => {

        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render(){

        const {title,body} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="journal-title" name="title" value={title} onChange={this.handleChange} placeholder="Title"/>
                <textarea rows="5" placeholder="Body" name="body" value={body} onChange={this.handleChange}></textarea>
                <p className="body-para">Use the form above to create a post. Make sure you fill the required title and body field and then press submit.</p>
                <button type="submit" className="submit-post-btn">Submit</button>
            </form>
        )
    }
}
export default AddJournalForm;

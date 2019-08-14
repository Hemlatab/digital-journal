//title input type text
//body use textarea
//sunmit
//create a state onchange update state for title n body onchange
//onsubmit add it to array add body n title to array in state
//create component for cards journal card
import React from "react";

class AddJournalForm extends React.Component{

    render(){
        return(
            <React.Fragment>
                <input type="text" />title
                <textarea>Body</textarea>
                <p className="body-para">Use the form above to create a post. Make sure you fill the required title and body field and then press submit.</p>
                <button className="submit-post">Submit</button>
            </React.Fragment>
        )
    }
}
export default AddJournalForm
//need to 2 state
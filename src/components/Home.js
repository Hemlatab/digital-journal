import React from 'react';
import AddJournalForm from './AddJournalForm';
import JournalCard from './JournalCard';
import './Home.css';

class Home extends React.Component{

    state = {
        title:'',
        body:'',
        notes:[]
    }

    handleChange = (event) => {

        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit = (event) => {
        
        event.preventDefault();
        this.setState({notes:[...this.state.notes,{title:this.state.title,body:this.state.body}]})
        console.log(this.state);
    }
        render(){
    return(
        <>
        <AddJournalForm handleChange={this.handleChange} title={this.state.title} body={this.state.body} handleSubmit={this.handleSubmit}/>
        <div className="card-container">
    
        {this.state.notes.map((note)=>{
            return <JournalCard title={note.title} body={note.body} />
        })}
        </div>
        </>
    )
 }
}

export default Home;
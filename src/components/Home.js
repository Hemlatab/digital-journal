import React from 'react';
import AddJournalForm from './AddJournalForm';
import JournalCard from './JournalCard';
import './Home.css';
import Firebase from '../components/Firebase';

class Home extends React.Component{

    state = {
        title:'',
        body:'',
        notes:[],
        isUpdate:false
    }
    componentDidMount(){   

        this.getNotesFromFirebase()
  
 }

 getNotesFromFirebase = () => {
    if(Firebase.getCurrentUsername()){
        let arr = []
    Firebase.db
  .collection('digital_notes')
  .doc(Firebase.auth.currentUser.uid)
  .collection('notes')
  .get()

  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      arr.push({ id: doc.id, title: doc.data().title, body: doc.data().body });
    });
  })
  .then(() => {
    this.setState({notes:arr});
  })
  .catch(error => {
    console.log('Error updating document', error);
  });
 }
}
    handleChange = (event) => {

        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit = (event,id) => {
        
        event.preventDefault();
        
    if(this.state.isUpdate){
        Firebase.updateNote(id,{title:this.state.title,
            body:this.state.body})
            this.setState({isUpdate:false})
    }else{
       Firebase.addNote({

           title:this.state.title,
           body:this.state.body
       })
    }
       this.setState({title:'',body:''})

       this.getNotesFromFirebase();
    }
    handleDelete = (id) => {
        Firebase.deleteNote(id)
        this.getNotesFromFirebase();
     
    }
    handleUpdate =(id)=> {
    
        let res = this.state.notes.filter((note)=>{
            return note.id ===id
        })
        console.log(res);
        this.setState({isUpdate:true,title:res[0].title,body:res[0].body,id:res[0].id})
        
    }
        render(){
          
    return(
        <>
        <AddJournalForm handleChange={this.handleChange} 
        id={this.state.id||''}
        title={this.state.title} 
        body={this.state.body} 
        handleSubmit={this.handleSubmit} 
        isUpdate={this.state.isUpdate} />
        <div className="card-container">
    
        {this.state.notes.map((note)=>{
            return <JournalCard 
            title={note.title} key={note.id} 
            body={note.body} 
            handleDelete={this.handleDelete} 
            handleUpdate={this.handleUpdate}
            id={note.id} />
        })}
        </div>
        </>
    )
 }
}

export default Home;
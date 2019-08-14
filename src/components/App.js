import React from 'react';
import './App.css';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import AddJournalForm from './AddJournalForm';


function App() {
  return (
    <div className="App">
     <Header />
     <AddJournalForm />
     <br />
     <SignupForm />
     <LoginForm />
      
    </div>
  );
}

export default App;
//



import React from 'react';
import Firebase from './Firebase';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Home from './Home';
//import Footer from './Footer';
import Header from './Header';
//import Loader from './Loader';

class App extends React.Component {
  state={
    firebaseInitialized:false
  }
  componentDidMount(){
      Firebase.isInitialized().then(val =>{
        this.setState({
          firebaseInitialized:val
        })
      })
  }
  render(){

  return  (
    <Router>
      
    <div className="App">
      <Header />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/LoginForm" component={LoginForm} />
      <Route path="/SignupForm" component={SignupForm} />
      </Switch>
    
      {/* <Footer /> */}
    </div>
    </Router>
  )


  }
}
export default App;




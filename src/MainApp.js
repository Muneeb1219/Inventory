import React, { Component } from 'react'
import {BrowserRouter, Route } from "react-router-dom"
import App from './App';
import Home from './Home';
import NavBar from './NavBar';
import Login from './Login'
import SignUp from './SignUp'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
googleProvider: new firebase.auth.GoogleAuthProvider(),
};
 class MainApp extends Component {
   constructor (props){
     super(props);
     this.state={
       user:{},
     }
   }
  

   

     authListener(){

      firebase.auth().onAuthStateChanged =  (user)  => {
         if(user) {
          this.setState({user})
         }else {
           this.setState({user:  null})
         }
      } ;
     };
    
    render() {
        
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log( "User is signed in")
            } else {
              console.log(" No user is signed in")
            }
          });
      
   
        return (
            
            <BrowserRouter>

      <div className ="App">

      
     
         <NavBar />
        
          <Route exact path={"/"} component={Home} />

          <Route path={"/Login"} component={Login} />
          <Route path={"/SignUp"} component={SignUp} />
          <Route path={"/App"} component={App} />
          


          

          </div>
     
        </BrowserRouter>
        )
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(MainApp);

import React, { Component } from 'react'
import  { Redirect } from 'react-router-dom'
import * as firebase from 'firebase/app';

export default class Home extends Component {
    constructor(props) {
        super();
    }
   



    
       
       
    render() {
        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
              console.log( "User is signed in")
            } else {
                // return <Redirect to='/login'  />
                this.props.history.push('/login')
            }
          });
    //     if (authFails) {
         
    // }
        return (

            
            <div>
            <h1 style={{textAlign:"center"}}>Welcome to Inventory Store</h1>
            

                
            </div>
        )
    }
}

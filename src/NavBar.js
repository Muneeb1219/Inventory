import React, { Component } from 'react'
import {Link} from "react-router-dom"
import * as firebase from 'firebase/app';

export default class NavBar extends Component {
    hanleClick =() => {
        firebase.auth().signOut().then(function() {
            console.log("Sign-out successful")
          }).catch(function(error) {
             console.log( "An error happened")
          });
     }
    
  render() {
        
    
        let button;
        var user = firebase.auth().currentUser;
if (user) {
     button =  <div>
                <a ><Link to ="/">Home</Link></a>
                <a ><Link to ="App">App</Link></a>
                <a style={{color:"white" , padding:"28px"}} onClick={this.hanleClick} >LogOut</a>
                </div>
                        
  
} else {
    button= <div>
    <a ><Link to ="Login">Login</Link></a>
 
    <a><Link to ="SignUp">SignUp</Link></a>
    </div>
}


        
        //  firebase.auth().onAuthStateChanged().then(res => {

        //     if (res) {
               
    
        //    }
        //     else {
    
              
               
               
        //    }
        // });
          
        return (
            <nav>
            <div className="topnav" >
            <a className="active" href="aa"></a>

            <ul  id= "nav-moile" className="right">

            {button}
            
            
            
           
            
            </ul>
                
        </div>
            </nav>
        )
    }
}

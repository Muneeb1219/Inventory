import React, { Component } from 'react'
import * as firebase from 'firebase/app';
import  { Redirect } from 'react-router-dom'


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state= {
            bb:[],
            
    
        }
    
       
    }
    
    
    handleSubmit = (e) => {
        e.preventDefault();
          
          let obj = {
            Email:'',
            Password:'',
        
          }
        
          firebase.auth().signInWithEmailAndPassword(e.target[0].value , e.target[1].value)
          .then(function(eis) {

        
            console.log("login" ,eis)

            
        
        


    
    })
          .catch(function(error) {
            var errorCode = error.code;
            console.log(errorCode)
            var errorMessage = error.message;
            console.log(errorMessage)
    
          });

        
    
    
        
    
      }
    
    
    render() {

      
      
        
        
        return (

          <div>

          <form className="form" style={{backgroundColor:"white"}} onSubmit={this.handleSubmit}>
             <h1 style={{padding:"30px"}}>Login</h1>
            <label style={{width:"100px", }} for="uname"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="uname" required /><br/>
        
            <label style={{width:"100px"}} for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required /><br/>

            <button className="lbtn"  style={{borderStyle:"solid"  }}   >Login
  
  
            </button>
        
            

            </form>

            </div>



        
    )
    }
}


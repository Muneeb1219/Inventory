import React, { Component } from 'react'
import * as firebase from 'firebase/app';

export default class SignUp extends Component {
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
      



      
      firebase.auth().createUserWithEmailAndPassword( e.target[0].value , e.target[1].value) 
      .then(function(eis) {

        
            console.log("signup" ,eis)
        
        


    
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
          

                
            

            <form className="form1" style={{backgroundColor:"white"}} onSubmit={this.handleSubmit}>
               <h1 style={{padding:"30px"}}>Registration</h1>
              <label style={{width:"100px", }} for="uname"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="uname" required /><br/>
          
              <label style={{width:"100px"}} for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required /><br/>
          
              <button className="lbtn"  style={{borderStyle:"solid" }}  >SignUp
  
  
            </button>
  
              </form>
  
            
  
            </div>
        )
    }
}

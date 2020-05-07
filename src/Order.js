import React, { Component } from 'react'
import Col from 'react-bootstrap/Col' 


export default class Order extends Component {
    handleRemoveOrder = (key) => {
        const rem = this.props.order
        rem.splice(key ,1)
        this.setState({ data:rem});

    }
    render() {
        console.log(this.props.order)
        
        const orderItem =this.props.order.map((key ) => 

        <div class="container">
        <div class="row">
        <div class="col-sm-6">
        {key.name} <span><button style={{color:"black" , backgroundColor:"white"}} onClick={this.handleRemoveOrder}>x</button></span>
        </div>

        <div class="col-sm-6">
        {key.price}
        </div>
    
  </div>
</div>
             )
             const total = this.props.order.reduce((add ,number) =>{
                 return add= add+ number.price;
             },0
             
             )
        


        


    
        return (

           
            <Col className="col-2" style={{borderStyle:"double"}}>
  
     <div>
     <h6 style={{textAlign:"center" ,padding:"15px"}}>YOUR ORDER</h6></div>
      
     {orderItem} 

     <div style={{borderBottom: "2px solid" , padding:"12px"}}></div>
     
    
     <div style={{borderBottom: "2px solid", padding:"30px" ,paddingLeft:"2px"}}>
     Total: 
     {total} 

     </div>
     
     
     </Col>
    
        )
    }
}

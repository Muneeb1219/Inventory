import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 


export default class Fishes extends Component {
   
    render() {
        console.log(this.props.fish)
       
        const listItems = this.props.fish.map((number , key) =>

  <div className="div2">
  <div>
  
  <img className="img1" src={number.image} alt="" width="150px" height="120px" padding="3px"  />
  </div>
  <div className="aa">

  <p style={{float:"right" ,postion:"absolute" , top:"333px" , right:"2px" }}> ${number.price} </p>
  <h5 >{number.name}</h5>
  
  <p style={{fontSize:"13px"}} >{number.desc}</p>
  
  

  <button className="btn1"  onClick={()=> this.props.addToOrder(key) } style={{borderStyle:"solid" }}   >Add TO ORDER
  
  
  </button>
  </div>
  </div>
);
        return (
            
            
            <Col style={{borderStyle:"double",backgroundColor:"White" , width:"25px" }} className="id1">
            <Row>
            <Col  style={{borderStyle:"double",height:"850px"  }}>
            <div className="div1" >
            <h2>CATCH OF THE DAY</h2>
            <h7 >Fresh SEAFOOD MARKET</h7>
            
            </div>
            
            {listItems}
           
             </Col>

             </Row>
             </Col>
            
















           

            
        )
    }
}



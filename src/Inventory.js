import React, { Component } from 'react'
import Col from 'react-bootstrap/Col' 

export default class inventory extends Component {
   state={
      array:[],
   }
   


    
   handleonChange =(id , key , e)=>{
      (this.props.func(id , key , e.target.value))
      
  }
  handleCreateFish = (e) => {
    e.preventDefault();
          
    let obj = {
      name:'',
        image:'',
      desc:'',
      price:""
    }
    obj.name = e.target[0].value;
    obj.price= e.target[1].value;
    obj.desc= e.target[3].value;
    obj.image = e.target[4].value;


    console.log(obj);
    // this.state.array.push(obj)
    // this.setState({
    //     array:this.state.array
    // })

    this.props.createFish(obj);
    e.currentTarget.reset();
    




  }

  
       
    
    render() {
             console.log(this.props.data1)
            const keyItems = this.props.data1.map((number , key) =>

            <div >
            <table  border="1">
            <tr>

            <td ><input type="text" value={number.name} onChange={(e) => this.handleonChange(key ,"name", e)}  style={{border:"none", width:"145px"}}/></td>



            <td ><input type="text" value={number.price} onChange={(e) => this.handleonChange(key ,"price", e)} style={{border:"none", width:"141px"}} /></td>
            <td > <select className="sel" style={{border:"none" , width:"141px"  }}>
       
            <option value="available">Fresh !</option>
            <option value="unavailable" >Sold Out!</option>
            </select> 
            </td>
            </tr>
            </table>
            

            <div>
            <table border="1">
            <tr>
            <p ><input type="text"  value={number.desc} onChange={(e) => this.handleonChange(key ,"desc", e)} style={{border:"none" , width:"435px", fontSize:"11px"}}  /></p>
            
            </tr>
            </table>
            
            
            </div>
       
            <div>
            <table border="1">
            <tr>
           <p><input type="text" value={number.image} onChange={(e) => this.handleonChange(key ,"image", e)}  style={{border:"none" ,width:"435px"}} /></p>
            </tr>
            </table> 
            
            
            </div>
       
            <div>
            <table border="1">
            <tr>
           <th><button onClick={() => this.props.deleteFish(key)} style={{border:"none" ,width:"433px", backgroundColor:"white"}}>REMOVE FISH</button></th>
            </tr>
            </table>
            </div>
            </div>
            
            );
           
            
            
            
                  
            


        return (
        
     <Col  style={{borderStyle:"double" ,width:"300px" , backgroundColor:"white"}}>
     <div style={{textAlign:"center" , padding:"7px"}}>
     <h4>Inventory</h4>
     </div>

     <div>
     <button  >LOG OUT!</button >
     </div>
     {keyItems}
     
           <div>
           <form onSubmit={this.handleCreateFish}>
            <table  border="1">
                 <tr>
      <td ><input type="text" placeholder="Fish Name"  style={{border:"none", width:"145px"}}/></td>
     
     
     
                 <td ><input type="text" placeholder="Fish Price" style={{border:"none", width:"141px"}} /></td>
                 <td > <select className="sel" style={{border:"none" , width:"141px"  }}>
            
                 <option >Fresh !</option>
                 <option  >Sold Out!</option>
                 </select> 
                 </td>
                 </tr>
                 </table>
     
                 <div>
                 <table border="1">
                 <tr>
                 <p ><input type="text"  placeholder="Fish Desc" style={{border:"none" , width:"435px", fontSize:"11px"}}  /></p>
                 
                 </tr>
                 </table>
                 
                 
                 </div>
            
                 <div>
                 <table border="1">
                 <tr>
                <input type="text" placeholder="Fish Image"  style={{border:"none" ,width:"435px" , fontSize:"11px"}} />
                 </tr>
                 </table> 
                 </div>
                 <div>
                 <table border="1">
                 <tr>
                <th><button style={{border:"none" ,width:"433px", backgroundColor:"white"}}>+Add Item</button></th>
                 </tr>
                 </table>
 
                 </div>
                 </form>
</div>



                 
                 
     
   


     </Col >
        )
    }   
}
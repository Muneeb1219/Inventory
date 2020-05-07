import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fishes from './Fishes.js';
import Order from './Order.js';
import Inventory from './Inventory.js'
import "./App.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



class App extends React.Component {
  state={
  
    order:[],
    data : [
      {
        name: "Pacific Halibut",
    image: "Fish.jpg",
    desc:
      "Everyones favorite white fish. We will cut it to the size you need and ship it.",
    price: 15.7,

      },
      {
        name: "Lobster",
    image: "11.jpg",
    desc:
      "These tender, mouth-watering beauties are a fantastic hit at any dinner party.",
    price: 17.5,
      },
      {
        name: "Sea Scallops",
    image: "22.jpg",
    desc:
      "Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",
    price: 30.5,
      },
      {
        name: "Mahi Mahi",
    image: "qq.jpg",
    desc:
      "Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",
    price: 15.5,
      }
    ]
  }

  addToOrder = (key) => {
    
    
    const asj = this.state.data
    let order = this.state.order

    order.push(asj[key]);
    
    this.setState( { order:order });

};
createFish = (fish) => {
  // debugger
  // let fifi = this.state.data
  // fifi.push(fish)
  // let Data = fifi

  this.state.data.push(fish)
  this.setState({
   data:this.state.data
  })
}
  deleteFish = (key) => {
    
    const Data = this.state.data
    
    Data.splice(key , 1);

    this.setState({ data:Data });
};

  funcA=(id , key , value)=>{
    console.log(id , key , value)
    let cd = this.state.data;
    cd[id][key] = value;
    this.setState({
      data:cd
    })
  }
  render () {
    console.log(this.state.order);
    return(
      <div>
 <button className="btn">Fold</button>
<Container style={{borderStyle:"double", borderWidth:"5px"}}>

<Row>

 <Fishes name={this.state.name}  fish={this.state.data}  addToOrder={this.addToOrder}/>

 <Order   order={this.state.order}
 fish={this.state.data} />

 <Inventory
 data1={this.state.data} func={this.funcA} 
 deleteFish={this.deleteFish}
 createFish={ this.createFish}/>

 
 


 



 </Row>

 </Container>
 
 
 </div>


 
 
    )
  }
}

export default App;


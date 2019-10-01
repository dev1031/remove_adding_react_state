import React from 'react';
import Ninjas from './Ninjas';
import Addninja from './Addninjas';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      ninjas :[
        {name :"Ryu" ,age :"25" ,belt: "Black" , id :1},
        {name :"Crystal" ,age :"20" ,belt: "Green", id :2},
        {name :"Ryu" ,age :"30" ,belt: "Gold" , id :3}
      ]
    }
  }

  addNinja = (ninja)=>{
    ninja.id = Math.random();
    let ninjas =[...this.state.ninjas ,ninja]//this is spread operator 
    //first element is previous array and second element ninja is what we are getting from addNinja component
    this.setState({
          ninjas:ninjas
    })
  }

  deleteNinja = (id)=>{
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id
    });
    this.setState({
      ninjas:ninjas
    })
  }
  
  render(){
    return(
      <div>
        <h1>Hello Ninjas</h1>
        <p>Please add the new ninja</p>
        <Ninjas ninjas = {this.state.ninjas} deleteNinja ={this.deleteNinja} />
        <Addninja  addNinja ={this.addNinja}/>
      </div>
    )
  }
}


export default App;

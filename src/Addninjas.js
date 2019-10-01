import React from 'react';

class Addninja extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            name : null,
            age :null,
            belt:null
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id]:e.target.value
           
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addNinja(this.state);
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id = "name" onChange ={this.handleChange}/>
                <label htmlFor="name">Age</label>
                <input type="text"  id="age"   onChange = {this.handleChange}/>
                <label htmlFor="name">Belt</label>
                <input type="text" id="belt"  onChange ={this.handleChange}/>
                <button >Add</button>
            </form>
        )
    }
}

export default Addninja;
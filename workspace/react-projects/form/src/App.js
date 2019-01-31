import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      firstName:"",
      lastName:"",
      isFriendly:false,
      gender:"",
      favFood:"Noodles"
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({[name] : checked}) :this.setState({[name]: value})
    this.setState({
      [name] : value
    })
  }
  render() {
    return (
      <div>
      <form>
        First Name: 
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          onChange={this.handleChange}
        />
        <br />
        <br />
        Last name: 
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          onChange={this.handleChange}
        />
        <br />
        <br />
        About
        <br/><textarea 
         onChange = {this.handleChange}
        />
        <br />
        <br />
        <input
           type="checkbox" 
           name="isFriendly" 
           onChange={this.handleChange}
           checked={this.state.isFriendly}
        />isFriendly
        <br/>

        {/* Here we give the same value (gender) for property name */}
        <label>
         <input
           type="radio" 
           name="gender" 
           value="male"
           checked={this.state.gender==="male"}
           onChange={this.handleChange}
        />Male
        </label>
        <label>
        <input
           type="radio" 
           name="gender" 
           value="female"
           checked={this.state.gender==="female"}
           onChange={this.handleChange}
        />Female
        </label>
          <br />
          Favourite Food :
          <select 
            value={this.state.favFood}
            name="favFood"
            onChange={this.handleChange}
          >
            <option value="noodles">Noodles</option>
            <option value="burger">Burger</option>
            <option value="sandwich">Sandwich</option>
          </select>
      </form>
      <h1>{this.state.firstName} {this.state.lastName}</h1><br/>
      <p>I'm {this.state.gender}</p>
      <p><i>My favourite food is {this.state.favFood}</i></p>
      </div>
    );
  }
}

export default App;

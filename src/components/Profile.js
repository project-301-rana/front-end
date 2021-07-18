import React, { Component } from 'react'
import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


export class Profile extends Component {

  addUser = async () =>{
    const email='rana.abusamhan@gmail.com';
    
    try {
      const url = `${process.env.REACT_APP_SERVER}/addUser?email=${email}`;
    console.log(url);
    const users=await axios.get(url);
    } catch{
      console.log('dgf')
    }
    // this.setState({
    //   usersData:users.data
    // })
  }


  render() {
    return (
      <div>
        <button onClick={this.addUser}>Add</button>
      </div>
    )
  }
}

export default Profile

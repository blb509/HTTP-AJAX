import React, { Component } from 'react';
import axios from 'axios';
import Display from './Components/Display';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      err: ""
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({ friendsList: res.data});
      })
      .catch(err => {
        console.log(err);
        this.setState({ err: err });
      });
  }


  render() {
    return <div><Display friends={this.state.friendsList}/></div>
  }
}

export default App;

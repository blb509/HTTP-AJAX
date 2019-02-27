import React, { Component } from 'react';
import axios from 'axios';
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
    console.log('CDM now running');
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
    return <div>hi</div>
  }
}

export default App;

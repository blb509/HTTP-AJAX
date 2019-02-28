import React, { Component } from 'react';
import axios from 'axios';
import Display from './Components/Display';
import FriendForm from './Components/FriendForm'
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

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({
          friendsList: res.data
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ err: err });
      });
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friendsList: res.data
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ err: err });
      });
  };



  render() {
    return <div><Display friends={this.state.friendsList}
    deleteFriend={this.deleteFriend}/>
    <FriendForm addFriend={this.addFriend}/>
    </div>
  }
}

export default App;

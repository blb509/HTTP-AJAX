import React from 'react';
import axios from 'axios';

class FriendForm extends React.Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: '',
    }
  };

  changeHandler = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === 'age') {
        value = parseInt(value, 10);
      }
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: value
      }
    });
    }

    handleSubmit = e => {
        this.props.addFriend(e, this.state.friend);
        this.setState({
          friend: {
            name: '',
            age: '',
            email: ''
          }
        });
      };
    

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="string"
            name="name"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.friend.name}
          />

          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.friend.age}
          />

          <input
            type="string"
            name="email"
            onChange={this.changeHandler}
            placeholder="email"
            value={this.state.friend.email}
          />

          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>

      </div>
    );
  }
}

export default FriendForm;

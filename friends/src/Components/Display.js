import React from 'react';

function Display(props) {
    if (props.friends.length === 0) {
        return <h3>Loading friends...</h3>;
        }
        return (
        <div>
            {props.friends.map(friend => (
            <div>
            <h1>{friend.name}</h1>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            </div>
            ))}
        </div>
        );
  }
  
export default Display;
  
  
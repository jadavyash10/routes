import React from 'react'
import { useLocation } from 'react-router-dom';

const User = (props) => {
    console.log('first', props.match.params.username)
  return <h1>Hello {props.match.params.username}!</h1>;
}

export default User
import React from 'react'
import { useLocation } from 'react-router-dom';
const Location = () => {
    let location = useLocation();
    console.log('first', location);
  return (
    <div>Location</div>
  )
}

export default Location
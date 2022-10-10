import React from 'react'
import { useLocation } from 'react-router-dom';

const Product = (props) => {
  let data = useLocation();
  // let id = props.location.state.id;
  return (
    <div>Product {data.state.id}</div>
  )
}

export default Product
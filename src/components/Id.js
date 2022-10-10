import React from 'react'
import { useParams } from 'react-router-dom';
const Id = () => {
    const {id} = useParams();
  return (
    <div>function Id{
        
         <h2> id : {id}</h2>
    }</div>
  )
}

export default Id
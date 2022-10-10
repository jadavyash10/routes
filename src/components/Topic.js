import React from "react";
import { useLocation, useParams } from 'react-router-dom';
const Topic = () => {
    const { search } = useLocation();
    console.log("xyz",search); 
    
    let {topicId} = useParams(); 
    return <h3>Requested topic ID: {topicId}</h3>;
};

export default Topic;

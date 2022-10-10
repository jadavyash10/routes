import React from "react";
import { Link, NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" replace>About</Link>
          </li>
          <li>
            <Link to={{pathname:"/product",state: {id: 123},search: '?some=search-string'}}>product</Link>
          </li>
          <li>
            <Link to="/topics">topics</Link>
            {/* <Link to="/topics" replace/> */}
          </li>
          
          <li>
          <NavLink
            to="/location"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            location
          </NavLink>
          </li>
          <Link to="/1">1</Link>
    <Link to="/2">2</Link>
    <Link to="/3">3</Link>
    <Link to="/4">4</Link>
         

        </ul>
      </div>
    </div>
  );
};

export default Home;

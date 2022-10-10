import React from 'react'
import { Link, Router, useLocation } from 'react-router-dom';


  // A custom hook that builds on useLocation to parse
  // the query string for you.
  function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  
  export default function QueryParamsDemo() {
    let query = useQuery();
  
    return (
      <div>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li>
              <Link to="/account?name=netflix">Netflix</Link>
            </li>
            <li>
              <Link to="/account?name=zillow-group">Zillow Group</Link>
            </li>
            <li>
              <Link to="/account?name=yahoo">Yahoo</Link>
            </li>
            <li>
              <Link to="/account?name=modus-create">Modus Create</Link>
            </li>
          </ul>
  
          <Child name={query.get("name")} />
        </div>
      </div>
    );
  }
  
  function Child({ name }) {
    return (
      <div>
        {name ? (
          <h3>
            The <code>name</code> in the query string is &quot;{name}
            &quot;
          </h3>
        ) : (
          <h3>There is no name in the query string</h3>
        )}
      </div>
    );
  }
  
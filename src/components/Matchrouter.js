import React, { useEffect, useMemo, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';

const Matchrouter = () => {

    
    const [count, setCount] = useState(0);

    const match = useRouteMatch({
      path: "/:foo?"
    });
  
    const matchButMemo = useMemo(() => match, [window.location.pathname]);
  
    useEffect(() => {
      const t = setTimeout(() => {
        setCount(prevCount => prevCount + 1);
      }, 3000);
  
      return () => clearTimeout(t);
    }, [count, setCount]);
  
    useEffect(() => {
      console.log("From hook", match);
    }, [match]);
  
    useEffect(() => {
      console.log("Memoized", matchButMemo);
    }, [matchButMemo]);
  
    return (
      <div>


        {JSON.stringify(match.params)}
        <br />
        {JSON.stringify(matchButMemo.params)}
      </div>
    );
}

export default Matchrouter
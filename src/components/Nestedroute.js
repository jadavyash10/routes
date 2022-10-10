import React from 'react'
import { Link } from 'react-router-dom'
const Nestedroute = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to ="/apple">apple</Link>
            </li>
            <li>
                <Link to ="/banana">banana</Link>
            </li>
            <li>
                <Link to ="/orange">orange</Link>
            </li>
            <li>
                <Link to ="/mango">mango</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nestedroute
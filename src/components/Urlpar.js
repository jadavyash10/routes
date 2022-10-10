import React from 'react'
import { BrowserRouter,Route,Link,useParams } from 'react-router-dom'
import Id from './Id'
const Urlpar = () => {
    
  return (
    <div>
        <BrowserRouter>
        <ul>
            <li>
                <Link to ="/netflix">netflix</Link>
            </li>
            <li>
                <Link to ="/amazon">amazon</Link>
            </li>
            <li>
                <Link to ="/yahoo">yahoo</Link>
            </li>
            <li>
                <Link to ="/google">google</Link>
            </li>
        </ul>

        <Route path='/:id'><Id/></Route>
        </BrowserRouter>
    </div>
  )
}

export default Urlpar
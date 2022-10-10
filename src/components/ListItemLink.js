import React from 'react'
import { Route,Link } from 'react-router-dom'

const ListItemLink = ({to,...rest}) => {
  return (
    <Route
      path={to}
      children={({ match }) => (
        <li className={match ? "active" : ""}>
          <Link to={to} {...rest} />
        </li>
      )}
    />
  )
}

export default ListItemLink
import React from 'react'
import { Route } from 'react-router-dom';
function FadingRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={routeProps => (
            <Component {...routeProps} />
        )}
      />
    );
  }

export default FadingRoute
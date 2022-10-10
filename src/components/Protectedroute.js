import React from "react";
import { Route, Redirect,useLocation,useHistory } from "react-router-dom";
import { useState } from "react";



export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  },
};

export const Public = () => <h3>Public</h3>;
export const Protected = () => {
    return <div>
        <AuthButton/>
    </div>
};

export function Login() {
    const [
        redirectToReferrer,
        setRedirectToReferrer
      ] = React.useState(false)
    
      const { state } = useLocation()
      console.log('state', state)
    
      const login = () => fakeAuth.authenticate(() => {
        setRedirectToReferrer(true)
      })
    
      if (redirectToReferrer === true) {
        return <Redirect to={state?.from || '/'} />
      }

  return (
    <div>
      <p>You must log in to view the page</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
export function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return fakeAuth.isAuthenticated === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

function AuthButton() {
    const history = useHistory();
  
    return fakeAuth.isAuthenticated === true ? (
      <p>
        Welcome User {" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  }

export const Protectedroute = () => {
  return <div></div>;
};

export default Protectedroute;

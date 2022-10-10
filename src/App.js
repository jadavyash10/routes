import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Topics from "./components/Topics";
import HomeButton from "./components/HomeButton";
import Location from "./components/Location";
import Urlpar from "./components/Urlpar";
import Nestedroute from "./components/Nestedroute";
import Mango from "./components/Mango";
import User from "./components/User";
import FadingRoute from "./components/FadingRoute";
import ListItemLink from "./components/ListItemLink";
import { Link } from "react-router-dom";
import {
  Public,
  Login,
  PrivateRoute,
  Protected,
} from "./components/Protectedroute";
import { ShowTheLocation } from "./components/ShowTheLocation";
import { useState } from "react";
import UsematchRouter from "./components/UsematchRouter";
import Matchrouter from "./components/Matchrouter";
import GenratePath from "./components/GenratePath";
import QueryParamsExample from "./components/Search";

function App() {
  return (
    <div className="App">
      <h1>Routing v5</h1>
      <Matchrouter/>
      <GenratePath/>
      <QueryParamsExample/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
        <Route
          path={["/user/:username", "/profile/:username"]}
          component={User}
        />
        <Route path="/asd" render={() => <h4>hello world</h4>} />
        <FadingRoute path="/cool" component={Nestedroute} />
        <Route
          path="/usematch"
          children={({ match }) => match && <UsematchRouter match={match} />}
        >
      
        </Route>
        <ul>
          <ListItemLink to="/somewhere">asdf</ListItemLink>
          <ListItemLink to="/somewhere-else" />
        </ul>
      </Switch>
      <div>
        <HomeButton />
        <Location />
        <Urlpar />
      </div>
      <div className="protected">
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Route path="/public">
          <Public />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/protected">
          <Protected />
        </PrivateRoute>
        {/* <ShowTheLocation/> */}
      </div>
    </div>
  );
}

export default App;

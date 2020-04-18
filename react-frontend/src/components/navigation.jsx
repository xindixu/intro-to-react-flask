import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Home from "../page/home";
import NotFound from "../page/not-found";
import About from "../page/about";
import Profile from "../page/profile";
import Posts from "../page/posts";
import Post from "../page/post";

const AppNavBar = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto" defaultActiveKey={location.pathname}>
        <Nav.Link eventKey="/" as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link eventKey="/about" as={Link} to="/about">
          About
        </Nav.Link>
        <Nav.Link eventKey="/profile" as={Link} to="/profile">
          Profile
        </Nav.Link>
        <Nav.Link eventKey="/posts" as={Link} to="/posts">
          Posts
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

const Navigation = () => (
  <Router>
    <AppNavBar />
    <Switch>
      <Route path="/post/:id">
        <Post />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default Navigation;

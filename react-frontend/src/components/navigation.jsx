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
import ApiProfile from "../page/api-profile";
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
        {/* 1. Click here. Should give you a 404 page*/}
        <Nav.Link eventKey="/about" as={Link} to="/about">
          About
        </Nav.Link>
        <Nav.Link eventKey="/profile" as={Link} to="/profile">
          Profile
        </Nav.Link>
        <Nav.Link eventKey="/api-profile" as={Link} to="/api-profile">
          Api Profile
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
      <Route path="/api-profile">
        <ApiProfile />
      </Route>
      <Route path="/post/:id">
        <Post />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      {/* 2. Uncomment the code and revisit about page, it is working!*/}
      {/* <Route path="/about">
        <About />
      </Route> */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Any not matched routes will render this component */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default Navigation;

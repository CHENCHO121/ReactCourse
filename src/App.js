import "./App.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import About from "./Component/About";
import Contact from "./Component/Contact";
import Event from "./Component/Event";
import Listing from "./Component/Listing";
import Condition from "./Component/Condition";
// import Fragment from './Component/Fragment'
import Users from "./Component/Users";
import Form from "./Component/Form";

import { NavLink, Route, BrowserRouter as Router } from "react-router-dom";
import {Switch,Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><Nav.Link href="#home">
              <NavLink exact to="/">
              Navbar
              </NavLink>
            </Nav.Link></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">
              <NavLink exact to="/">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#features">
              {" "}
              <NavLink exact to="/form">
                Create User
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#pricing">
              {" "}
              <NavLink exact to="/about">
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#home">
              <NavLink exact to="/form">
                Form
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#features">
              <NavLink exact to="/users">
                Users List
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <NavLink exact to="/contact">
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar>

      <Switch>
      <Route exact path='/' component={Event}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/form' component={Form}/>
      <Route exact path='/users' component={Users}/>
      <Route exact path='/condition' component={Condition}/>
      
      <Redirect to="/"/>
    </Switch>
      </Router>
    </div>
  );
}

export default App;

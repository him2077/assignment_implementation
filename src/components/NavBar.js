import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Col, Row} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Notification from './Notification';
import Cart from './Cart';

const bg = {
  backgroundColor: 'Pink'
}
const bg2 = {
  backgroundColor: '#FB7373'
}

export default class NavBar extends Component{
  render (){
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect style={bg} variant="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#home">
                Bobodave
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar" />
              <Navbar.Collapse id="navbar" className="justify-content-end">
                
                <Row className="justify-content-flex-end">                 
                  <Col xs={8}></Col>      
                  
                  <Col xs={2} >
                    <Navbar.Text>
                      <a href="#Ch">中文</a> / 
                      <a href="#Eng">English</a>
                    </Navbar.Text>
                  </Col>
  
                  <Col xs={15}>
                    <Nav className="nav" style={{ maxHeight: '100px' }} id="navbar">
                      <Nav.Link as {Link} to = {"/Login"}>Login</Nav.Link>
                      <Nav.Link as {Link} to = {"/Register"}>Register</Nav.Link>
                      <Nav.Link as {Link} to = {"/Notification"}>Notification</Nav.Link> 
                      <Nav.Link as {Link} to = {"/Favorites"}>Favorites</Nav.Link>
                      <Nav.Link as {Link} to = {"/Cart"}>Cart</Nav.Link>  
                    </Nav>    
                  </Col>  
                </Row>
                
              </Navbar.Collapse>
            </Container>
          </Navbar>
          
          <Navbar style={bg2} expand="lg">
            <Container fluid >
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                
                <NavDropdown title="Category" style={bg} id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
    
                <Form className="d-flex">
                  <FormControl type="search" placeholder="Search"
                    className="navSearch" aria-label="Search" />
                  <Button variant="outline-success">Search</Button>
                </Form>
  
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        
        <div>
          <Switch>          
            <Route path="/">
              <Home />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/Notification">
              <Notification />
            </Route>
            <Route path="/Favorites">
              <Favorites />
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
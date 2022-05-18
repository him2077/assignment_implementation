import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Col, Row} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Notification from "../Page/Notification";
import Favorites from "../Page/Favorites";
import Cart from "../Page/Cart";
import './NavTabs.css';

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
              <Navbar.Brand as={Link} to="/">
                Bobodave
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar" />
              <Navbar.Collapse id="navbar" className="justify-content-end">
                
                <Row>                 
                  <Col xs={10}></Col>      
                  
                  <Col xs={2} >
                    <Navbar.Text>
                      <a href="#Ch">中文</a> / 
                      <a href="#Eng">English</a>
                    </Navbar.Text>
                  </Col>
  
                  <Col xs={12}>
                    <Nav variant="tabs" className="justify-content-end" style={{ maxHeight: '100px' }} id="navbar">
                      <Nav.Item> <Nav.Link as={Link} to="/Login">Login</Nav.Link> </Nav.Item>
                      <Nav.Item> <Nav.Link as={Link} to="/Register">Register</Nav.Link> </Nav.Item>
                      <Nav.Item> <Nav.Link as={Link} to="/Notification">Notification</Nav.Link> </Nav.Item>
                      <Nav.Item> <Nav.Link as={Link} to="/Favorites">Favorites</Nav.Link> </Nav.Item>
                      <Nav.Item> <Nav.Link as={Link} to="/Cart">Cart</Nav.Link> </Nav.Item>
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
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Register" element={<Register />}/>
            <Route path="/Notification" element={<Notification />}/>
            <Route path="/Favorites" element={<Favorites />}/>
            <Route path="/Cart" element={<Cart />}/>
          </Routes>  
        </div>
      </Router>
    )
  }
}
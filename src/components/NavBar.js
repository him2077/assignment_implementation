import React, {Component} from 'react';
import {Navbar, Nav, Container, Col, Row} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from "react-router-dom";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Notification from "../Page/Notification";
import Favorites from "../Page/Favorites";
import Cart from "../Page/Cart";
import ProductList from "../Page/ProductList"
import ProductGrid from "../Page/ProductGrid"
import './NavTabs.css';
import SearchBar from './SearchBar';

const bg = {
  backgroundColor: 'Pink',
}

function CheckOnProduct(){
  let location = useLocation();
  if(location.pathname === "/ProductList" || location.pathname === "/ProductGrid")
  {
    return
  }
  else{
    return <SearchBar />
  }
              
}

export default class NavBar extends Component{
  render (){
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect style={bg} variant="light" expand="lg">
            <Container fluid>
              <Navbar.Brand style={{fontSize: 55, fontFamily: 'Jacques Francois'}} as={Link} to="/">
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
                      <Nav.Item> <Nav.Link as={Link} to="/Login"><span class="material-symbols-outlined"> login </span> Login</Nav.Link> </Nav.Item>
                      <Nav.Item> <Nav.Link as={Link} to="/Register"><span class="material-symbols-outlined">app_registration</span>Register</Nav.Link> </Nav.Item>
                      <Nav.Item> <Nav.Link as={Link} to="/Notification"><span class="material-symbols-outlined">notifications</span>Notification</Nav.Link> </Nav.Item>
                      <Nav.Item> <Nav.Link as={Link} to="/Favorites"><span class="material-symbols-outlined">favorite</span>Favorites</Nav.Link> </Nav.Item>
                      <Nav.Item> <Nav.Link as={Link} to="/Cart"><span class="material-symbols-outlined">shopping_cart</span>Cart</Nav.Link> </Nav.Item>
                    </Nav>    
                  </Col>  
                </Row>
                
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <CheckOnProduct />
          
        </div>

        
        <div>        
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Register" element={<Register />}/>
            <Route path="/Notification" element={<Notification />}/>
            <Route path="/Favorites" element={<Favorites />}/>
            <Route path="/Cart" element={<Cart />}/>
            <Route path="/ProductList" element={<ProductList />}/>
            <Route path="/ProductGrid" element={<ProductGrid />}/>
          </Routes>  
        </div>
      </Router>
    )
  }
}
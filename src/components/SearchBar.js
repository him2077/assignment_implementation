import React from 'react'
import { NavDropdown, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import { Link} from "react-router-dom";
const bg2 = {
    backgroundColor: '#FB7373'
  }
  const category = {
    backgroundColor: 'Pink',
    width: 185,
    height: 50,
    marginRight: 28
  }
 const SearchBar = () => {
  return (
        <div>          
            <Navbar style={bg2} expand="lg">
                <Container fluid >
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <NavDropdown title={<div><div class="material-symbols-outlined">category</div>Category</div>} style={category} id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/ProductList">Skincare</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProductList">Eye & Lip Care</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProductList">Makeup Remover</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProductList">Suncare</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProductList">Chest & Neck Care Massage Oil</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProductList">Perfume & Home Fragrance</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProductList">Beauty Tool & Device</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProductList">Hair Styling & Tool</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProductList">Nail Care</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProductList">Men's Section</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProductList">Sensitive Skin</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProductList">Beauty, Slimming & Fitness Supplement</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProductList">Contact Lens</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>

                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search"
                                className="navSearch" aria-label="Search" style={{width: 500}}/>
                            <Button variant="outline-success">
                                Search
                            </Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default SearchBar
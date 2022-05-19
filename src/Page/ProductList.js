import React, {Component} from 'react';
import { ButtonGroup, Button, Row, Col, Container, Form, FormControl, Card} from 'react-bootstrap';
import './ProductList.css';


function List(){
    const cardInfo = [
        { imageURL: "http://www.bobodave.com/bmz_cache/d/d4347006b32fa45e0fd848467a6aa46d.image.587x550.jpg", title: "Product1", text: "This is the description"},
        { imageURL: "http://www.bobodave.com/bmz_cache/d/d4347006b32fa45e0fd848467a6aa46d.image.587x550.jpg", title: "Product2", text: "This is the description"},
        { imageURL: "http://www.bobodave.com/bmz_cache/d/d4347006b32fa45e0fd848467a6aa46d.image.587x550.jpg", title: "Product3", text: "This is the description"},
        { imageURL: "http://www.bobodave.com/bmz_cache/d/d4347006b32fa45e0fd848467a6aa46d.image.587x550.jpg", title: "Product4", text: "This is the description"},
        { imageURL: "http://www.bobodave.com/bmz_cache/d/d4347006b32fa45e0fd848467a6aa46d.image.587x550.jpg", title: "Product5", text: "This is the description"},
        { imageURL: "http://www.bobodave.com/bmz_cache/d/d4347006b32fa45e0fd848467a6aa46d.image.587x550.jpg", title: "Product6", text: "This is the description"},
        { imageURL: "http://www.bobodave.com/bmz_cache/d/d4347006b32fa45e0fd848467a6aa46d.image.587x550.jpg", title: "Product7", text: "This is the description"},
        { imageURL: "http://www.bobodave.com/bmz_cache/d/d4347006b32fa45e0fd848467a6aa46d.image.587x550.jpg", title: "Product8", text: "This is the description"},
        { imageURL: "http://www.bobodave.com/bmz_cache/d/d4347006b32fa45e0fd848467a6aa46d.image.587x550.jpg", title: "Product9", text: "This is the description"},
        { imageURL: "http://www.bobodave.com/bmz_cache/d/d4347006b32fa45e0fd848467a6aa46d.image.587x550.jpg", title: "Product10", text: "This is the description"},
    ] ;
    const renderListCard = (card, index) =>{
        return(
            <Card className="ListCard " key={index}>
            <Card.Img className='listImg' variant="left" src={card.imageURL}/>
            <Card.Body>                
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                {card.text}
                </Card.Text>
                <Row><Col><Button variant="primary">
                    <span class="material-symbols-outlined">add_shopping_cart</span>
                </Button></Col><Col><div className='price'>$10</div></Col></Row>
                
            </Card.Body>
            
            </Card>
        )
    }

    return (
    <div className="list">
        {cardInfo.map(renderListCard)}
    </div>
    )
}

export default class ProductList extends Component{
    render() {
        return (
                <div>
                <table className='productListPage'>
                        <tr>
                            <Container>
                                <Row>
                                    <Col className='category'>
                                        <div class="material-symbols-outlined">category</div>Category
                                    </Col>
                                    <Col className='searchBar'>
                                        <Form className="d-flex">
                                                <FormControl type="search" placeholder="Search"
                                                    className="navSearch" aria-label="Search" style={{width: 500}}/>
                                                <Button variant="outline-success">
                                                    Search
                                                </Button>
                                        </Form>                                 
                            
                                    </Col>
                                    <Col>
                                        <ButtonGroup >
                                            <Button variant="outline-danger" href="./ProductGrid">
                                                <span class="material-symbols-outlined">grid_view</span>
                                            </Button>
                                            <Button variant="danger" href="./ProductList">
                                                <span class="material-symbols-outlined">view_list</span>
                                            </Button>
                                        </ButtonGroup>                                
                                    </Col>
                                </Row> 
                            </Container>

                        </tr>
                        <tr>
                            <Container fluid>

                                <Row>
                                    <Col xs={2}>
                                        <ButtonGroup vertical class="productList">
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Skincare</Button>
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Eye & Lip Care</Button>
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Makeup Remover</Button>
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Suncare</Button>
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Chest<br/> & Neck Care Massage Oil</Button>
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Perfume<br/> & Home Fragrance</Button>
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Beauty Tool<br/> & Device</Button>
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Hair Styling<br/> & Tool</Button>
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Nail Care</Button>
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Men's Section</Button>
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Sensitive Skin</Button>
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Beauty, Slimming <br/> & Fitness Supplement</Button>
                                            <Button className="text-center text-md-right" variant="light" href="./ProductList">Contact Lens</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xs={10}>
                                        <Row>
                                        <List />
                                        </Row>                            
                                    </Col>
                                </Row>
                            </Container>
            
                        </tr>
                </table>
                

                </div>
        )
    }
}
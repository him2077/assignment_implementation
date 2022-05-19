import React, {Component} from 'react';
import { ButtonGroup, Button, Row, Col, Container, Form, FormControl, Card} from 'react-bootstrap';
import './ProductList.css';



function Grid(){
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
        { imageURL: "http://www.bobodave.com/bmz_cache/d/d4347006b32fa45e0fd848467a6aa46d.image.587x550.jpg", title: "Product11", text: "This is the description"},
        { imageURL: "http://www.bobodave.com/bmz_cache/d/d4347006b32fa45e0fd848467a6aa46d.image.587x550.jpg", title: "Product12", text: "This is the description"},
    ] ;
    const renderGridCard = (card, index) =>{
        return(
            <Card className="gridCard " style={{ width: '18rem' }} key={index}>
            <Card.Img className ="rounded mx-auto" variant="top" src={card.imageURL}/>
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
    <div className="grid">
        {cardInfo.map(renderGridCard)}
    </div>
    )
}

export default class ProductGrip extends Component{
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
                                            <Button variant="danger" href="./ProductGrid">
                                                <span class="material-symbols-outlined">grid_view</span>
                                            </Button>
                                            <Button variant="outline-danger" href="./ProductList">
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
                                            <Button variant="light" href="./ProductGrid">Skincare</Button>
                                            <Button variant="light" href="./ProductGrid">Eye & Lip Care</Button>
                                            <Button variant="light" href="./ProductGrid">Makeup Remover</Button>
                                            <Button variant="light" href="./ProductGrid">Suncare</Button>
                                            <Button variant="light" href="./ProductGrid">Chest<br/> & Neck Care Massage Oil</Button>
                                            <Button variant="light" href="./ProductGrid">Perfume<br/> & Home Fragrance</Button>
                                            <Button variant="light" href="./ProductGrid">Beauty Tool<br/> & Device</Button>
                                            <Button variant="light" href="./ProductGrid">Hair Styling<br/> & Tool</Button>
                                            <Button variant="light" href="./ProductGrid">Nail Care</Button>
                                            <Button variant="light" href="./ProductGrid">Men's Section</Button>
                                            <Button variant="light" href="./ProductGrid">Sensitive Skin</Button>
                                            <Button variant="light" href="./ProductGrid">Beauty, Slimming <br/> & Fitness Supplement</Button>
                                            <Button variant="light" href="./ProductGrid">Contact Lens</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xs={10}>
                                        <Row>
                                        <Grid />
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
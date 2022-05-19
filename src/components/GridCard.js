import React from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'
import './Grid.css'

const GridCard = () => {
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

  const renderGridCard = (card, index) =>{
    return(
      <Card className="gridCard" style={{ width: '18rem' }} key={index}>
        <Card.Img className ="rounded mx-auto" variant="left" src={card.imageURL}/>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
          <Row>
            <Col>
              <Button variant="primary"><span class="material-symbols-outlined">add_shopping_cart</span></Button>
            </Col>
            <Col>
              <div className='price'>$10</div>
            </Col>
          </Row>
          
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

export default GridCard
import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';



export default class Home extends Component{
  render(){
    return (
      <div>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="rounded mx-auto d-block"
              style={{height: 450}}
              src="http://www.bobodave.com/myfiles/28349_1411239394760_1045750612_31159473_3850569_n.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="rounded mx-auto d-block"
              style={{height: 450}}
              src="http://www.bobodave.com/myfiles/28349_1411239394760_1045750612_31159473_3850569_n.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="rounded mx-auto d-block"
              style={{height: 450}}
              src="http://www.bobodave.com/myfiles/28349_1411239394760_1045750612_31159473_3850569_n.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>      
    )
  }
}
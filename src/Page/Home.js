import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import GridCard from '../components/GridCard';

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
              <p>First slide label</p>
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
              <p>Second slide label</p>
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
              <p>Third slide label</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1>Hot Sale</h1>
        
        <GridCard/>
      </div>    
 
    )
  }
}
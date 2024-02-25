import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Card from './Components/Card/Card';


import Karta from '/Users/tetyana/Documents/Date/react/Projects/Tolv-Stockholm/app_tolv/src/images/karta-ny-tolv.png'
import Start2 from '/Users/tetyana/Documents/Date/react/Projects/Tolv-Stockholm/app_tolv/src/images/start-2.jpg'
//import Carousel from 'react-bootstrap/Carousel';


function ResponsiveAuto() {
    return (
      <Container class="site-content content-area site-main container">
                          
        <Row>
          <Col md={9}>
            <div>
              <h1 Carousel />
            </div>
            <div class="entry-content content-text">
            <h3 className="text-center m-4">  Sweden’s largest entertainment arena</h3>
              <p className="text-center m-4">At Tolv Stockholm you will find activities food and drinks for all ages and occasions. Do you want to go bowling, sing karaoke or play a round of shuffleboard? These are just some of the activities you can enjoy with us. When you feel like you want to satisfy your hunger and quench your thirst, you can choose between our three restaurants, we have everything from home cooking to tasty tacos and hamburgers. Welcome!</p>
            </div>
  
          </Col>
  
          <Col md={3}>
            <div>
              <aside class="opening-hours" > 
                <h3>Opening hours</h3>
                <div class="hours">
                  <p>
                    <span>O'Learys</span>
                  </p>
                  <p><span>Mon-Tue</span> 10.30-23</p>
                  <p><span>Wed-Thur</span> 10.30-00</p>
                  <p><span>Friday</span> 10.30-02</p>
                  <p><span>Saturday</span> 11-02</p>
                  <p><span>Sunday</span> 11-23</p>
                  <p><span>Event Center</span> Opens 11 at weekdays.</p>
                  <p><span>-----------------------------</span></p>
                  <p><span>Boston Grill</span></p>
                  <p><span>Wed-Thu</span> 17-22</p>
                  <p><span>Friday</span> 17-23</p>
                  <p><span>Saturday</span> 16-23</p>
                  <p><span>-----------------------------</span></p>
                  <p><span>Taco Bar</span></p>
                  <p><span>Mon-Thur</span> 11-20</p>
                  <p><span>Fri-Sat</span> 11-23</p>
                  <p><span>Sunday</span> 12-20</p>
                  <p><span>-----------------------------</span></p>
                  <p><span>Colosseum Nightclub</span></p>
                  <p><span>Fri-Sat</span> 22-03</p>
                  <p><span>-----------------------------</span></p>
                  <p><span>Club Backdoor</span></p>
                  <p><span>Fri-Sat</span> 22-05</p>
                  <p><span>-----------------------------</span></p>
                  <div class="more-hours"><a href="/oppettider">All opening hours</a>
                  </div>
                </div>
              </aside>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={9}> md=true
            <div>
            <h3>Sweden’s largest entertainment arena</h3>
              <p>At Tolv Stockholm you will find activities food and drinks for all ages and occasions. Do you want to go bowling, sing karaoke or play a round of shuffleboard? These are just some of the activities you can enjoy with us. When you feel like you want to satisfy your hunger and quench your thirst, you can choose between our three restaurants, we have everything from home cooking to tasty tacos and hamburgers. Welcome!</p>
            </div>
            
          </Col>
          <Col md>md=true
          </Col>
        </Row>
        <Row>
          <Col md={9}>md=true
            <img
              src={ Start2 } alt="Start-2"
            /> 
          </Col>
          <Col md={3}>md=true
          </Col>
        </Row>
        <Row>
          <Col md={9}>md=true
            <h1 Card/> 
          </Col>
          <Col md={3}>md=true
          </Col>
        </Row>
  
        <Row>
          <Col md>
            <img 
              src={ Karta } alt="karta"
            />
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default ResponsiveAuto;
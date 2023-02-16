import React from 'react';
import './news-letter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/newtourist.png';

const NewsLetter = () => {
  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="newsletter__content">
              <h2>Subscribe to always be updated</h2>
              <div className="newsletter__input">
                <input type="email" placeholder='email@email.com' />
                <button className="btn newsletter__btn">Update me</button>
              </div>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, eaque enim beatae aliquid harum fugiat?
              </p>
            </div>
          </Col>

          <Col lg='6'>
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NewsLetter
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/matembe2.jpg';
import heroImg02 from '../assets/images/matembe1.png';
import worldImage from '../assets/images/world.png'
import heroVideo from '../assets/images/video.mp4';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';

import '../styles/home.css';
import SearchBar from '../shared/SearchBar';
import ServicesList from '../services/ServicesList';
import FeaturedPosts from '../components/Featureds/FeaturedPosts';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonials/Testimonials';
import NewsLetter from '../shared/NewsLetter';



const Home = () => {

  return (
    <>
    {/* ****************Starting hero section**************************** */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Welcome to home esteem with Matembe'}/>
                  <img src={worldImage} alt="" />
                </div>
                
                <h1>
                  Everyday life in African societies 
                  <span id='typed' className="highlights"> and culture</span>
                </h1>

                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates quidem illum numquam saepe inventore mollitia sed, neque natus repellat alias nemo voluptas necessitatibus! Soluta facere quod totam quaerat itaque.
              </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" /> 
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls loop /> 
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" /> 
              </div>
            </Col>

            <SearchBar/>

          </Row>
        </Container>
      </section>
    {/* ****************ending hero section**************************** */}


    {/* ****************starting service section**************************** */}

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">
              My Services
            </h5>

            <h2 className="services__title">
              Services we offer
            </h2>
          </Col>

          <ServicesList />

        </Row>
      </Container>
    </section>
    {/* ****************ending service section**************************** */}


    {/* ****************************Featured section start*************************** */}

    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'} />
            <h2 className="featured__title">
               Our featured posts
            </h2>
          </Col>
          <FeaturedPosts />
        </Row>
      </Container>
    </section>

    {/* ****************************Featured section ends*************************** */}


    {/* **********************Experience section starts*************************** */}

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
              <h2>With all our experience <br /> we will serve you</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nihil! <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nihil! 
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successfull trips</h6>
              </div>
              <div className="counter__box">
                <span>21k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>10</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
           <div className="experience__img">
            <img src={experienceImg} alt="ex_image" />
           </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* **************************Experience section ends*************************** */}


    {/* **************************Gallery section starts*************************** */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className='gallery__title'>
              Navigate through my gallery
            </h2>
          </Col>

          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/* **************************Gallery section ends*************************** */}


    {/* ***********************Testimonials section stsrts*************************** */}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Testimonials'} />
            <h2 className="testimonial__title">
              My fans' opnions are too important
            </h2>
          </Col>

          <Col>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
    {/* ************************Testimonials section ends*************************** */}
    
    <NewsLetter />

    </>
  )
}

export default Home
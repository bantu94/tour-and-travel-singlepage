import React from 'react';
import Slider from 'react-slick';

import avatar01 from '../../assets/images/ava-1.jpg';
import avatar02 from '../../assets/images/ava-2.jpg';
import avatar03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {


  const settings = {
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:true,
    slidesToShow:3,

    responsive: [
      {
        breakpoint:992,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
          dots:true,
          infinite:true,
        },
      },
      {
        breakpoint:576,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
        },
      }
    ]


  }


  return (
    <Slider {...settings }>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias expedita in reiciendis dolorum eos natus veritatis tempora, vero tenetur reprehenderit minus voluptatum porro exercitationem error dolore. Quibusdam, inventore. Voluptas!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar01} alt="avatar" className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'>Wamwezi Zaina</h6>
            <p>Customer</p>
          </div>
        </div>

      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias expedita in reiciendis dolorum eos natus veritatis tempora, vero tenetur reprehenderit minus voluptatum porro exercitationem error dolore. Quibusdam, inventore. Voluptas!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar02} alt="avatar" className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'>Lubowa Jinja</h6>
            <p>Customer</p>
          </div>
        </div>

      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias expedita in reiciendis dolorum eos natus veritatis tempora, vero tenetur reprehenderit minus voluptatum porro exercitationem error dolore. Quibusdam, inventore. Voluptas!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar03} alt="avatar" className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'>Matembe Dembe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias expedita in reiciendis dolorum eos natus veritatis tempora, vero tenetur reprehenderit minus voluptatum porro exercitationem error dolore. Quibusdam, inventore. Voluptas!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar01} alt="avatar" className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'>Wamwezi Zaina</h6>
            <p>Customer</p>
          </div>
        </div>

      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias expedita in reiciendis dolorum eos natus veritatis tempora, vero tenetur reprehenderit minus voluptatum porro exercitationem error dolore. Quibusdam, inventore. Voluptas!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar02} alt="avatar" className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'>Lubowa Jinja</h6>
            <p>Customer</p>
          </div>
        </div>

      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias expedita in reiciendis dolorum eos natus veritatis tempora, vero tenetur reprehenderit minus voluptatum porro exercitationem error dolore. Quibusdam, inventore. Voluptas!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar03} alt="avatar" className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'>Matembe Dembe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>


    </Slider>
  )
}

export default Testimonials
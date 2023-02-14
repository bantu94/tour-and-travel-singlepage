import React from 'react';
import PostsCard from '../../shared/PostsCard';
import tourData from '../../assets/data/tours';
import { Col } from 'reactstrap';

const FeaturedPosts = () => {
  return (
    <>
      {
        tourData?.map(tour => (
          <Col lg='3' className='mb-4' key={tour.id}>
            <PostsCard tour={tour} />
          </Col>
        ))
      }
    </>
  )
}

export default FeaturedPosts
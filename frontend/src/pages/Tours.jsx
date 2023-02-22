import React, { useEffect, useState } from 'react';
import CommonSections from '../shared/CommonSections';
import '../styles/tour.css';
import tourData from '../assets/data/tours'
import PostsCard from '../shared/PostsCard';
import SearchBar from '../shared/SearchBar';
import NewsLetter from '../shared/NewsLetter';
import { Col, Container, Row } from 'reactstrap';

const Tours = () => {


  const [pageCount, setPageCount] = useState(0)

  const [page, setPage] = useState(0)

  useEffect(()=> {
    const pages = Math.ceil(5/ 4)
    setPageCount(pages)
  },[page])



  return (
    <>
      <CommonSections title={'All Tours'} />
      <section>
        <Container>
          <Row>
            <Col>
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>


      <section className='pt-0'>
        <Container>
          <Row>
            {
              tourData?.map(tour=> (
              <Col lg='3' className='mb-4' key={tour.id} >
                <PostsCard tour={tour} />
              </Col>))
            }

            <Col lg='12'>
              <div className="pagination d-flex align-items-center justify-content-center">
                {[...Array(pageCount).keys()].map(number => (
                  <span key={number} onClick={() => setPage(number)} className={page===number ? 'active__page' : ''} >
                    {number + 1}
                  </span>
                ))}

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <NewsLetter />
    </>
  )
}

export default Tours
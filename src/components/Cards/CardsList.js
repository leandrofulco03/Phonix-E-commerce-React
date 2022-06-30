import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Cards from './Cards';

function CardsList({products}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, []);

  return (
    <Container>
          <Row>
              {products.length ? (
                  <>
                  {products.map((item) => {
                    return (
                        <Col col={6} lg={3} md={6} sm={12} xs={9} className="mx-4 m-3" key={item.id}>
                        <Cards 
                        image={item.image} 
                        title={item.title} 
                        description={item.description} 
                        price={item.price}
                        stock={item.stock}
                        id={item.id}
                        />
                        </Col>
                    )
                })}
                </>

              ) : (
                <div className='loader d-flex justify-content-center align-items-center'>
                  <ClipLoader size={40} color={'#000'} loading={loading} />
                </div>
                
              )}
          </Row>
      </Container>
  )
}

export default CardsList;
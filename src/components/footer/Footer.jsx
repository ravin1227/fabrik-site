import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './footer.css'

const MY_ACCOUNT = [
  { 
    display: 'Author Profile', 
    url: '/seller-profile'
  },
  { 
    display: 'Create Item', 
    url: '/create'
  },
  { 
    display: 'Collection', 
    url: '/market' 
  },
  { 
    display: 'Edit Profile', 
    url: '/edit-profile' 
  },
]

const RESOURCES = [
  { 
    display: 'Help Center', 
    url: '#'
  },
  { 
    display: 'Partner', 
    url: '#'
  },
  { 
    display: 'Community', 
    url: '#' 
  },
  { 
    display: 'Activity', 
    url: '#' 
  },
] 

const COMPANY = [
  { 
    display: 'Abput', 
    url: '#'
  },
  { 
    display: 'Career', 
    url: '#'
  },
  { 
    display: 'Ranking', 
    url: '#' 
  },
  { 
    display: 'Contact us', 
    url: '/contact' 
  },
] 

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='6' sm='6' className='mb-4' >
              <div className="logo">
                  <h2 className='d-flex gap-2 align-item-center'>
                    <span><i class="ri-fire-fill"></i></span>
                    NFTs
                  </h2>
                  <p>If you keep your eyes open and brain empty while 
                    interacting with the people who are offering you opportunities then you probably won't deny any opportunity
                  </p>
              </div>

          </Col>

          <Col lg='2' md='3' sm='6' className='mb-4' >
            <h5>My Account</h5>
            <ListGroup className="list_group">
              {
                MY_ACCOUNT.map((item, index)=>(
                <ListGroupItem className='list_item' key={index}>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='2' md='3' sm='6' className='mb-4'>
            <h5>Resources</h5>
            <ListGroup className="list_group">
              {
                RESOURCES.map((item, index)=>(
                <ListGroupItem className='list_item' key={index}>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          

          <Col lg='2' md='3' sm='6' className='mb-4'>
            <h5>Company</h5>
            <ListGroup className="list_group">
              {
                COMPANY.map((item, index)=>(
                <ListGroupItem className='list_item' key={index}>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3' md='6' sm='6' className='mb-4' >
            <h5>Newsletter</h5>
            <input type="text" className="newsletter" placeholder='Email' />
            <div className="social_links d-flex gap-3 align-items-center">
              <span><Link to={'#'}><i class="ri-facebook-line" ></i></Link></span>
              <span><Link to={'#'}><i class="ri-instagram-line" ></i></Link></span>
              <span><Link to={'#'}><i class="ri-twitter-line" ></i></Link></span>
              <span><Link to={'#'}><i class="ri-telegram-line" ></i></Link></span>
              <span><Link to={'#'}><i class="ri-discourd-line" ></i></Link></span>
            </div>
          </Col>
          <Col lg='12' className='mt-4 text-center' >
            <p className='copyright'>Copyrights 2022, Developed my Ravindra for Fabrik 
              All Rights Reserved. {" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
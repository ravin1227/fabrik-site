import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './herosection.css'
import heroImg from '../../assets/images/hero.jpg'

const HeroSection = () => {
  return (
    <section className="hero_section">
        <Container>
            <Row>
                <Col lg='6' md ='6'>
                    <div className="hero_content">
                        <h2>Discover and Create  New World </h2>
                        <p>The Metaverse is not magic, it is a new world created by aliens from planet Earth to give an infinite experience of the existing world.</p>

                        <div className="hero_btns d-flex align-items-center gap-4">
                            <button className=' explore_btn d-flex align-items-center gap-2'>
                                <i className="ri-rocket-line"></i>
                                <Link to='/market'>Explore</Link>
                            </button>
                            <button className=' create_btn d-flex align-items-center gap-2' >
                                <i className="ri-ball-pen-line"></i>
                                <Link to='/create'>Upload Creativity</Link>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg ='6' md ='6'>
                    <div className="hero_img">
                        <img src={heroImg} alt="" className='w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection
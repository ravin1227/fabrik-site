import React, { useEffect, useState } from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import NftCard from '../components/ui/Card/Card'
import '../styles/market.css';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import axios from 'axios'

const Market = () => {
  // const [data, setData] = useState(NFT_DATA);
  const [data, setData] = useState([])

    useEffect(  ()=>{
         axios.get(`https://fabrikapi.herokuapp.com/api/post`)
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err,"it has an error"));        
    },[]);

  return (
    <>
      <Header />
      <CommonSection title={"MarketPlace"} />
      <section>
        <Container>
          <Row>
            {data?.map(item => (
              <Col lg='3' md='4' sm='6' className='mb-4' key={item.id}><NftCard item={item} /></Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer/>
    </>
  )
}

export default Market
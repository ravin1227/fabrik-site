import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Trending.css'
import NftCard from '../Card/Card'
import axios from 'axios';


const Trending = () => {

    const [data, setData] = useState([])

    useEffect(  ()=>{
         axios.get(`https://fabrikapi.herokuapp.com/api/post`)
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err,"it has an error"));        
    },[]);
    console.log(data)


  return (
    <section>
        <Container>
            <Row>
                <Col lg ='12' className='mb-5'>
                    <h3 className="trending_title">Trending</h3>
                </Col>

                {data.slice(0, 8).map((items)=>(                    
                    <Col lg='3' md='4' sm='6' key={items.id} className='mb-4'>
                        <NftCard item={items} />
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default Trending
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import View from './View';

const ViewById = () => {
    const {id} =useParams()
    const [data, setData] = useState('')
    useEffect( ()=>{        
        axios.get(`https://fabrikapi.herokuapp.com/api/post${id}`)
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err,"it has an error"));
    }, []);
    console.log(data);

  return (
    <>
        <View item={data} />
    </>
  )
}

export default ViewById
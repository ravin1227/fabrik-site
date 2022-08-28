import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './card.css'
import { useParams } from 'react-router-dom'

const NftCard = (props) => {
  const {object, _id,name,title,date} =props.item;

  let objData = object.data.data
//   console.log(objData)
  const base64String =   btoa(new Uint8Array(objData).reduce(function (data, byte) {
  return data + String.fromCharCode(byte);}, ''));
  const source = `data:image/png; base64,${base64String}`  
//   console.log(source)

  return (
    <div className="single_nft_card">
        <div className="nft_img">
             <img src={source} alt="" className='w-100' />
        </div>

        <div className="nft_content">
            <h5 className="nft_title"><Link to={`/viewById/${_id}`}>{title}</Link></h5>
            <div className="creator_info-wrapper">
                    <div className="creator_info w-100 d-flex align-items-center justify-content-between">
                        <div >
                            <h6>Created By</h6>
                            <p>{name}</p>
                        </div>
                        <div >
                            <h6>Created On</h6>
                            <p>{date}</p>
                        </div>
                    </div>
            </div>
            <div className='d-flex align-items-center justify-content-center nft_view_btn '>
                <Link to={`/viewById/${_id}`}>
                    <button className="bid_btn d-flex align-items-center gap-2" >
                        <i className="ri-eye-line"></i> 
                        View
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NftCard
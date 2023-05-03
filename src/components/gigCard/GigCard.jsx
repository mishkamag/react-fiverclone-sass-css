import React from 'react'
import "./GigCard.scss"
import { Link } from "react-router-dom"
import { AiOutlineHeart } from 'react-icons/ai';

const GigCard = ({item}) => {
  return (
    <Link to="/gig/123">
    <div className='gigCard'>
        <img src={item.img} alt="" />
        <div className="info">
            <div className="user">
                <img src={item.pp} alt="" />
                <span>{item.username}</span>
                <div className="star">
                    <img src="" alt="" />
                    <span>{item.star}</span>
                </div>
            </div>
            <p>{item.desc}</p>
        </div>
        <hr/>
        <div className="details">
            <AiOutlineHeart/>
            <div className="price">
                <span>STARTING AT</span>
                <h2>${item.price}</h2>
            </div>
          
        </div>
    </div>
    </Link>
  )
}

export default GigCard
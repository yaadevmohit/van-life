import React, { useEffect, useState } from 'react'
import data from "../../data"
import { Link, useParams } from 'react-router-dom'

export default function VanDetail() {
    const params = useParams()
    const van = data.find(vanData => vanData.id === params.id)
  return (
    <>
        <Link to="../vans"><p className='back-button'>Back to all vans</p></Link>
        <div className='van-detail-container'>
            <div className='van-detail'>
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className='van-price'><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className='link-button'>Rent this van</button>
            </div>
        </div>
    </>
  )
}

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data"


export default function Vans() {

  const vansElements = data.map(van => {
    return(
      <div key={van.id} className="van-tile">
        <img src={van.imageUrl}/>
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    )
  })  
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vansElements}
      </div>
    </div>
  )
}

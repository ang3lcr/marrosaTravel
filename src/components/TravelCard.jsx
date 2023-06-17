import React from 'react'
import '../styles/travel-card.css'
import { Link } from 'react-router-dom'

const TravelCard = (props) => {

    let MXN = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    })


    return (
    <div className='TravelCard'>
        <div className="travelcard-overlay"></div>
        <div className="card-content">
            <img src={props.image} alt="" className='card-image'/>
            <h1 className='card-name'>{props.name}</h1>
            <p className="card-description">{props.description}</p>
            <div className="price-button-container">
                <p className='card-price'>{MXN.format(props.price)}</p>
                <button className='button-34'>Me interesa</button>
            </div>
        </div>
    </div>
  )
}

export default TravelCard
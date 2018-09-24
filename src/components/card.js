import React from 'react'
import { Link } from 'gatsby'
import './card.css'


const Card = props => (
    <div className="Card">
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Card
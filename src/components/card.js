import React from 'react'
import "./cards.css"

const Card = (props) => {
    return (
        <>
        <li className="cards__item">
            <div className="cards__item__link">
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                    <h5>githup link:</h5>
                    <a href={props.githup} target="_blank" >{props.githup}</a>
                    <h5>website link:</h5>
                    <a href={props.website} target="_blank" >{props.website}</a>
                </div>
            </div>
        </li>
        </>
    )
}

export default Card

import React from 'react'

function CardComponent(props){
    return (
        <div className="card">
            <label className="title">{props.title}</label>
            <label className="location">@ {props.location}</label>

            <label className="date">{props.date}</label>
        </div>
    )
}

export default CardComponent;
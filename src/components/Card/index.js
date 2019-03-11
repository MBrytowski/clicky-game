import React from "react";
import "./style.css";

const Card = props => (
    <div className="puppy-card img-container">
        <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.clickyClick(props.id)} className="shuffle"/>
    </div>
)

export default Card;
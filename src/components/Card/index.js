import React from "react";
import "./style.css";
// import GameBoard from "../GameBoard";

const Card = props => (
    <div className="card img-container hover hover">
        <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleBoard(props.id)} className="shuffleScore"/>
    </div>
)

export default Card;
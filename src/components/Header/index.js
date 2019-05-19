import React from "react";
import "./style.css";

function Header(props) {
  return (
    <>
      <ul className="nav header sticky-top justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Click Memory Game
          </a>
        </li>
        <li className="nav-item">
          <p className="nav-link">{props.message}</p>
        </li>
        <li className="nav-item">
          <p className="nav-link">Current Score: {props.roundScore} | Top Score: {props.highScore}</p>
        </li>
      </ul>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Memory Game</h1>
          <p className="lead">
            Click on any picture below, but be sure not to click the same picture twice!
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import "./style.css";

function Header(props) {
  return (
    <>
      <ul class="nav header justify-content-center">
        <li class="nav-item">
          <a class="nav-link" href="/">
            Click Memory Game
          </a>
        </li>
        <li class="nav-item">
          <p class="nav-link">Current Score: {props.roundScore} | Top Score: {props.highScore}</p>
        </li>
      </ul>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Memory Game</h1>
          <p class="lead">
            Click on any picture below, but be sure not to click the same picture twice!
            Click on any picture to begin.
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;

// To Do:
//Create props that increment
//Add photos
//Randomize photos on click
//top score persists until a new high score
//Round score that is reset
//on click creates shuffle, increases score if id has not been clicked

import React, { Component } from "react";
import Header from "../Header";
import Data from "../data.json";
import Card from "../Card";

class GameBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            highScore: 0,
            roundScore: 0
        }
    }
    //on click handler - check if item has been clicked, if so reset round score and shuffle board and update high
    //score if round score is greater than high score
    //if not, increase round score by 1, shuffle board and update clicked to true
    clickyClick = () => {
            if(Data.clicked === true) {

            } else {
                this.setState({ roundScore: this.state.roundScore + 1 })
            }
            return Data;
    }
    
    
    //shuffle board function - populate board by looping(map) through data array - randomize - takes in data array
    //return new shuffled array and update state with new array - update state in this function
    shuffleBoard = () => {
        Data.map((a) => [Math.random(), a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    }
    // var shuffled = array.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);

    //functional component that holds each image

    componentDidMount() {
        this.shuffleBoard();
    }

    render() {
        return(
            <div>
                <Header highScore={this.state.highScore} roundScore={this.state.roundScore} />
                <Card 
                />
            </div>
        )
    }
}

export default GameBoard;
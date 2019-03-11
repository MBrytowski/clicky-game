import React, { Component } from "react";
import Header from "../Header";
import pics from "../data.json";
import Card from "../Card";
import Wrapper from "../Wrapper";

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pics: pics,
      notChosen: pics,
      highScore: 0,
      roundScore: 0,
      message: "Click an image to begin!"
    };
  }
  //on click handler - check if item has been clicked, if so reset round score and shuffle board and update high
  //score if round score is greater than high score
  //if not, increase round score by 1, shuffle board and update clicked to true
  clickyClick = id => {
    const dogCollar = this.state.notChosen.find(item => item.id === id);
    if (dogCollar === undefined) {
        this.setState({
            highScore: (this.state.roundScore > this.state.highScore) ? this.state.roundScore : this.state.highScore,
            roundScore: 0,
            pics: pics,
            notChosen: pics,
            message: "Bummer! You choose the same one. Click another image to play again!"
        })
    } else {
        const newCollar = this.state.notChosen.filter(item => item.id !== id);
      this.setState({ 
          roundScore: this.state.roundScore + 1,
          pics: pics,
          notChosen: newCollar,
          message: "Great guess!" 
        });
    }
    this.shuffleBoard();
  };

  //shuffle board function - populate board by looping(map) through data array - randomize - takes in data array
  //return new shuffled array and update state with new array - update state in this function
  shuffleBoard = () => {
    const puppy = this.state.pics.sort(() => Math.random() - 0.5);
    this.setState({ puppy });
  };

  componentDidMount() {
    this.shuffleBoard();
  }

  render() {
    return (
      <div>
        <Header
          highScore={this.state.highScore}
          roundScore={this.state.roundScore}
          message={this.state.message}
        />
        <Wrapper>
          {this.state.pics.map(card => (
            <Card id={card.id} 
            key={card.id} 
            image={card.image} 
            clicked={card.clicked} 
            clickyClick={this.clickyClick}
            roundScore={this.state.roundScore}/>
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default GameBoard;

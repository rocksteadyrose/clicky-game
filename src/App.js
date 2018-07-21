import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import characters from "./characters.json";
import "./App.css";



//////////////////////////////////////////////////////////////////
class App extends Component {

  // Setting this.state.characters to the characters json array
  state = {
    score: 0,
    highScore: 0,
    ifClicked: [],
    scoreMessage: "Click a character to begin!",
    characters,
  };


  //////////////////////////////////////////////////////////////////

  //GAME FUNCTIONALITY

  //CLICK SECTION
  click = id => {
    const newestScore = this.state.score + 1;
    //If they haven't been clicked, add them to the array
    if (this.state.ifClicked.indexOf(id) === -1) {
      this.handleScoreIncrement();
      this.setState(
        {
          //concat joins arrays
          ifClicked: this.state.ifClicked.concat(id),
          scoreMessage: "You guessed correctly!",
        }
      );
      //if they've been clicked already, reset the game
    } else {
      this.reset();
    }

    //Setting it to winning number here (and then clearing out array) because it wasn't setting state to score message in handle score increment
    if (newestScore === 12) {
      this.setState({
        scoreMessage: "You win!",
        ifClicked: []
      })
  };
}

  //SCORING SECTION
  handleScoreIncrement = () => {
    //Take existing score and add 1 to it
    const newestScore = this.state.score + 1;

    // Update score and clear out message
    this.setState({
      score: newestScore,
    });

    //Set high score
    if (newestScore >= this.state.highScore) {
      this.setState({
        highScore: newestScore
      });
    }
    //Resetting score to 0 if they hit 12
    if (newestScore === 12) {
      this.setState({
        score: 0
      });
    }
    //Shuffle cards
    this.shuffle();
  };

  //SHUFFLE CHARACTER CARDS SECTION
  shuffle = () => {
    //Set this array equal to the characters json
    //Fisher–Yates shuffle
    let imageArray = characters;
    for (let i = imageArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
    }
    return imageArray
  }

  //RESET SECTION
  reset = () => {
    //Update state when they lose
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      ifClicked: [],
      update: "",
      scoreMessage: "BOOO! Click a character to start over.",
    });
    this.shuffle();
  };

  /////////////////////////////////////////////////////////////////////

  //GAME RENDER
  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (

      <Wrapper>
        <Nav
          title="Zootopia Clicky Game"
          score={this.state.score}
          highScore={this.state.highScore}
          scoreMessage={this.state.scoreMessage}/>
        <Jumbotron
          title="Zootopia Clicky Game"
          header="Click on a character to earn points, but don't click on any character more than once!"
        />
        {this.state.characters.map(character => (
          <CharacterCard
            key={character.id}
            id={character.id}
            click={this.click}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    )
  }
};

//////////////////////////////////////////////////////////////////
export default App;

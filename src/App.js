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
    scoreCorrect: "",
    scoreIncorrect: "",
    characters,
    update: "Click a character to begin!"
  };
  //////////////////////////////////////////////////////////////////

  //GAME FUNCTIONALITY

  //CLICK SECTION
  click = id => {
    //If they haven't been clicked, add them to the array
    if (this.state.ifClicked.indexOf(id) === -1) {
      this.handleScoreIncrement();
      this.setState(
        {
          //concat joins arrays
          ifClicked: this.state.ifClicked.concat(id),
          scoreCorrect: "You guessed correctly!",
          scoreIncorrect: "",
          update: ""
        }
      );
      console.log(this.state.ifClicked)
      //if they've been clicked already, reset the game
    } else {
      this.reset();
    }
  };

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
      this.setState({ highScore: newestScore });
    }
    //Winning message if they hit 12
    else if (newestScore === 12) {
      this.setState({ scoreUpdate: "You win!" });
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
      scoreIncorrect: "BOOOOO! Click a character to start over.",
      scoreCorrect: ""
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
          update={this.state.update}
          score={this.state.score}
          highScore={this.state.highScore}
          scoreIncorrect={this.state.scoreIncorrect}
          scoreCorrect={this.state.scoreCorrect}
          scoreMessage={this.state.scoreMessage} />
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

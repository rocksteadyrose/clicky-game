import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import characters from "./characters.json";
import "./App.css";


class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    score: 0,
    highScore: 0,
    ifClicked: [],
    scoreMessage: "",
    characters
  };

  //GAME FUNCTIONALITY
  click = id => {
    console.log("Clicked!!");
    if (this.state.ifClicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState(
        {
          ifClicked: this.state.ifClicked.concat(id)
        }
      );
    } else {
      this.reset();
    }
  };

  handleIncrement = () => {
    const newestScore = this.state.score + 1;
    this.setState({
      score: newestScore,
      scoreMessage: ""
    });
    if (newestScore >= this.state.highScore) {
      this.setState({ highScore: newestScore });
    }
    else if (newestScore === 12) {
      this.setState({ scoreMessage: "You win!" });
    }
    this.shuffle();
  };


  reset = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      ifClicked: [],
      scoreMessage: "NEW GAME!!",
    });
    this.shuffle();
  };

  shuffle = () => {
    let imageArray = characters;
    for (let i = imageArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
    }
    return imageArray
  }

  //GAME RENDER
  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (

      <Wrapper>
        <Nav
          title="Zootopia Clicky Game"
          score={this.state.score}
          highScore={this.state.highScore}
          scoreMessage={this.state.scoreMessage} />
        <Title>Click each character without clicking any duplicates!</Title>
        {this.state.characters.map(character => (
            <CharacterCard
              key={character.id}
              reset={this.reset}
              id={character.id}
              handleIncrement={this.handleIncrement}
              click={this.click}
              name={this.name}
              image={character.image}
              shuffle={this.shuffle}
            />
        ))}
      </Wrapper>
    )
  }
};


export default App;

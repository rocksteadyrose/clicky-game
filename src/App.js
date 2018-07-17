import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Counter from "./components/Counter";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.characters to the characters json array

  state = {
    count: 0,
    characters: characters
  };

  clickCharacter = id => {
    // Filter this.state.characters for characters with an id not equal to the id being clicked
    // const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.characters equal to the new characters array
    this.setState({ characters });

    handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count + 1 });
    };
  
    // handleDecrement decreases this.state.count by 1
    handleDecrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count - 1 });
    };

  };

  // Map over this.state.character and render a FriendCard component for each character object
  render() {
    return (
      <Wrapper>
        <Nav/>
        <Counter />
          <Title />
        {this.state.characters.map(character => (
          <CharacterCard
            clickCharacter={this.clickCharacter}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

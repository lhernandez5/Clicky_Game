import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Header from "./components/Header/Header";
import Character from "./components/Character/Character";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    count: 0,
    total: 0,
    ids: []
  };

  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  handleIncrement = id => {
    //s We always use the setState method to update a component's state
    const arr =this.state.ids;
    this.state.ids.push(id);
    console.log(this.state.ids);

    function countInArray(array, num) {
      return array.filter(item => item === num).length;
    }

    const number = countInArray(arr, id);

    if (number === 1) {
      this.setState({ count: this.state.count + 1 });
      this.setState({ total: this.state.total + 1 });
    } else if (number > 1) {
      this.setState({ count: 0 });
      this.setState({ total: this.state.total + 1 });
      this.setState({ids:[]});
    }
  };

  // Map over this.state.friends and render a FriendCard component for each character object
  render() {
    const shuffledCharacters = this.shuffleArray(this.state.characters);
    return (
      <Wrapper>
        <span className="card-text">Click Count: {this.state.count}</span>
        <span className="card-text">Score Total: {this.state.total}</span>
        <Header />
        {shuffledCharacters.map(character => (
          <Character
            id={character.id}
            key={character.id}
            image={character.image}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Header from "./components/Header/Header";
import Character from "./components/Character/Character";
import "./App.css";

class App extends Component {
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
    const arr = this.state.ids;
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
      this.setState({ ids: [] });
    }
  };

  render() {
    const shuffledCharacters = this.shuffleArray(this.state.characters);
    return (
      <Wrapper>
        <Header>
          <div className="card-text">Score: {this.state.count}{"    "}|{"   "}Top Score: {this.state.total}</div>
        </Header>
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

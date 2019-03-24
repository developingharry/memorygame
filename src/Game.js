import React, { Component } from 'react';
import './Game.css';
import Header from './Header';
import Card from './Card';
import * as data from './Decks.json';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state={
      deck:data.decks[0],
      rating: "*****",
      moves: 0
    };
    this.switchDecks = this.switchDecks.bind(this);
  }

  switchDecks() {
    this.setState({deck: data.decks[1]});
  }

  render() {
    return (
      <div>
        <Header switch={this.switchDecks} moves={this.state.moves}/>
        <div className="board">
          {this.state.deck.map(card => (
            <Card source={card.name} key={card.id} />
          ))}
        </div>
      </div>

    );
  }
}

export default Game;
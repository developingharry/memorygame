import React, { Component } from 'react';
import './Game.css';
import Header from './Header';
import TestCenter from './TestCenter';
import * as data from './Decks.json';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state={
      deck:data.decks[0],
      rating: "*****",
      moves: 0,
      leftHand: '',
      rightHand: '',
      a1contents: data.decks[0][0].name,
      shuffled: [],
      a1status: 'default',
      a2status: 'default',
      a3status: 'default',
      a4status: 'default',
      b1status: 'default',
      b2status: 'default',
      b3status: 'default',
      b4status: 'default',
      c1status: 'default',
      c2status: 'default',
      c3status: 'default',
      c4status: 'default',
      d1status: 'default',
      d2status: 'default',
      d3status: 'default',
      d4status: 'default'
    };
    this.switchDecks = this.switchDecks.bind(this);
    this.clickhandler = this.clickhandler.bind(this);
    this.prepDeck = this.prepDeck.bind(this);
  }

  switchDecks() {
    this.setState({deck: data.decks[1], a1contents: data.decks[1][0].name});
  }

  clickhandler(card) {
    this.setState({leftHand: card});
  }

  prepDeck() {
    console.log("prepping deck");
    let shuffledDeck = data.decks[0].slice(0);
    let positions = ['a1','a2','a3','a4','b1','b2','b3','b4','c1','c2','c3','c4','d1','d2','d3','d4'];
    
    for (var i = 0; i < positions.length; i++) {
      shuffledDeck[i].pos = positions[i];
      console.log("finished assigning positions");
    }
    console.log(shuffledDeck[0].pos + shuffledDeck[1].pos + shuffledDeck[2].pos);
    this.setState({deck: shuffledDeck});
  }

  render() {
    return (
      <div>
        <Header switch={this.switchDecks} moves={this.state.moves}/>
        <div className="board">
          {this.state.deck.map(card => (
            <div key={card.id} onClick={this.clickhandler.bind(this, card.id)} className="card">{card.pos}{card.name}</div>
          ))}
        </div>
        <TestCenter lh={this.state.leftHand}
                    rh={this.state.rightHand}

                    a1={this.state.a1status}
                    a2={this.state.a2status}
                    a3={this.state.a3status}
                    a4={this.state.a4status}

                    b1={this.state.b1status}
                    b2={this.state.b2status}
                    b3={this.state.b3status}
                    b4={this.state.b4status}

                    c1={this.state.c1status}
                    c2={this.state.c2status}
                    c3={this.state.c3status}
                    c4={this.state.c4status}

                    d1={this.state.d1status}
                    d2={this.state.d2status}
                    d3={this.state.d3status}
                    d4={this.state.d4status}
                    
                    prepDeck={this.prepDeck}
                    />
      </div>

    );
  }
}

export default Game;
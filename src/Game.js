import React, { Component } from 'react';
import './Game.css';
import Header from './Header';
import TestCenter from './TestCenter';
import * as data from './Decks.json';
import cardback from './images/cardback.png';

class Game extends Component {
  constructor(props) {
    super(props);
    this.mortyDeck=data.decks[0];
    this.marioDeck=data.decks[1];
    this.cardCounter=1;
    this.pairs=0;
    this.leftHand=null;
    this.rightHand=null;
    this.matchFound=false;
    this.leftcardtoflip=null;
    this.rightcardtoflip=null;
    this.state={
      deck:data.decks[0],
      rating: "*****",
      moves: 0,
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
    this.clickhandler = this.clickhandler.bind(this);
    this.flipBack = this.flipBack.bind(this);
    this.checkHand = this.checkHand.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.matchCheck = this.matchCheck.bind(this);
    this.checkHand = this.checkHand.bind(this);
    this.contents = this.contents.bind(this);
  }
  
  resetCounter() {
    this.cardCounter=1;
  }

  addMove() {
    this.setState(prevState => ({
      moves: this.state.moves + 1
    }));
  };

  matchCheck() {
    let lefth=this.leftHand;
    let righth=this.rightHand;
    if(lefth===righth) {
      this.acknowledgeMatch();
    } else {
      console.log('no match found');
    }
  }

  winSequence() {
    alert('your winner');
  }

  acknowledgeMatch(){
    let leftcard = this.leftcardtoflip.pos + 'status';
    let rightcard = this.rightcardtoflip.pos + 'status';
    this.setState(prevState => ({
      [leftcard]: 'solved',
      [rightcard]: 'solved',
    }));
    this.pairs++;
    this.matchFound=true;
    this.cardCounter=1;
  }

  flip(card){
    let currentCard=`${card.pos}status`;
    this.setState({[currentCard]: 'flipped'});
  }

  checkHand(card) {
    switch(this.cardCounter) {
      case 1:
        this.leftHand=card.name;
        this.leftcardtoflip=card;
        this.flip(card);
        this.cardCounter=2;
        break;
      case 2:
        this.rightHand=card.name;
        this.rightcardtoflip=card;
        this.flip(card);
        this.matchCheck();
        this.cardCounter=3;
        this.addMove();
        if(this.pairs===8) {
          this.winSequence(card);
        }
        break;
      case 3:
        if(!this.matchFound){
          this.flipBack();
        };
        this.matchFound=false;
        this.flip(card);
        this.leftHand=card.name;
        this.leftcardtoflip=card;
        this.rightHand=null;
        this.rightcardtoflip=null;
        this.cardCounter=2;
        break;
      default:
        console.log('something went pear-shaped');
        break;
    }
  };

  flipBack() {
    let leftcard = this.leftcardtoflip.pos + 'status';
    let rightcard = this.rightcardtoflip.pos + 'status';
    this.setState(prevState => ({
      [leftcard]: 'default',
      [rightcard]: 'default'
    }));
  }
  
  clickhandler(card) {
      let chosenCard = `${card.pos}status`;
      switch(this.state[chosenCard]) {
        case 'default':
          this.checkHand(card);
          break;
        case 'flipped':
          if(this.cardCounter!==3){
            alert('this card is already flipped');
          } else {
            this.checkHand(card);
          }
          break;
        case 'solved':
          alert('this card is already solved');
        break;
        default:
          alert('something went wrong');
      }
  }

  shuffleDeck(deck) {
    for(var i=0;i<2;i++) {
      console.log("shuffling");
      deck.sort(function() {
        return 0.5 - Math.random()
      });
    };
  };

  assignPos(deck) {
    console.log('assigning positions');
    let positions = ['a1','a2','a3','a4','b1','b2','b3','b4','c1','c2','c3','c4','d1','d2','d3','d4'];
    for (var i = 0; i < positions.length; i++) {
      deck[i].pos = positions[i];
      console.log("finished assigning positions");
    }
  }

  resetGame() {
    this.cardCounter=1;
    this.pairs=0;
    this.leftHand=null;
    this.rightHand=null;
    this.matchFound=false;
    this.leftcardtoflip=null;
    this.rightcardtoflip=null;
    this.setState({
      deck:data.decks[0],
      rating: "*****",
      moves: 0,
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
    });
  }

  componentWillMount() {
    this.initGame(this.mortyDeck);
  }

  initGame(deck) {
    this.resetGame();
    this.shuffleDeck(deck);
    this.assignPos(deck);
    this.setState({deck:deck});
  }

  contents(card) {
    let chosenCard = `${card.pos}status`;
    switch(this.state[chosenCard]) {
      case 'flipped':
        return <img src={require('./images/' +card.name+'.png')} className="cardface" alt="blah"/>
        // return <img src= {card.name} className="cardfront" alt={card.name}/>;
      case 'solved':
      return <img src={require('./images/' +card.name+'.png')} className="cardface solved" alt="blah"/>
      default:
        return <img src={cardback} className="cardback" alt="back of the card"/>;
    }
  }

  render() {
    return (
      <div>
        in the left hand is {this.leftHand} and in the right hand is {this.rightHand}.
        {this.state.pairs}/8 pairs found
        <Header moves={this.state.moves}
                rating={this.state.rating} 
                mortyButton={this.initGame.bind(this, this.mortyDeck)}
                marioButton={this.initGame.bind(this, this.marioDeck)}
                pairs={this.pairs}
        />


        <div className="board">
          {this.state.deck.map(card => (
            <div  key={card.id}
                  onClick={this.clickhandler.bind(this, card)}
                  className="card">
                  {this.contents.call(this, card)}
            </div>
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
                    
                    cardCounter = {this.cardCounter}
                    />
      </div>

    );
  }
}

export default Game;
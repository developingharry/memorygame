import React, { Component } from 'react';
import './Game.css';
import './csshake-little.min.css'
import * as data from './Decks.json';
import ramcardback from './images/ramcardback.png';
import mariocardback from './images/mariocardback.png';
import GameStats from './GameStats';
// import Buttons from './GameStats';

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
    this.mainbg= {
      backgroundImage: 'url("./images/bg.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
    this.state={
      deck:data.decks[0],
      rating: "*****",
      moves: 0,
      gamename: 'Rick and Morty',
      showWinDialog: false,
      a1status: 'default',
      a2status: 'default',
      a3status: 'default',
      a4status: 'default',
      a5status: 'default',
      a6status: 'default',
      b1status: 'default',
      b2status: 'default',
      b3status: 'default',
      b4status: 'default',
      b5status: 'default',
      b6status: 'default',
      c1status: 'default',
      c2status: 'default',
      c3status: 'default',
      c4status: 'default',
      c5status: 'default',
      c6status: 'default'
    };
    this.clickhandler = this.clickhandler.bind(this);
    this.flipBack = this.flipBack.bind(this);
    this.checkHand = this.checkHand.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.matchCheck = this.matchCheck.bind(this);
    this.checkHand = this.checkHand.bind(this);
    this.contents = this.contents.bind(this);
    this.closeWinDialog = this.closeWinDialog.bind(this);
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
    this.setState({
      showWinDialog: true
    })
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
        if(this.pairs===9) {
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
          // alert('this card is already solved');
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
    let positions = ['a1','a2','a3','a4','a5','a6','b1','b2','b3','b4','b5','b6','c1','c2','c3','c4','c5','c6'];
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
      rowA: [],
      rowB: [],
      rowC: [],
      rowD: [],
      rating: "*****",
      moves: 0,
      a1status: 'default',
      a2status: 'default',
      a3status: 'default',
      a4status: 'default',
      a5status: 'default',
      a6status: 'default',
      b1status: 'default',
      b2status: 'default',
      b3status: 'default',
      b4status: 'default',
      b5status: 'default',
      b6status: 'default',
      c1status: 'default',
      c2status: 'default',
      c3status: 'default',
      c4status: 'default',
      c5status: 'default',
      c6status: 'default'
    });
  }

  componentWillMount() {
    this.initGame(this.mortyDeck);
    document.body.classList.add('mortybg');
  }

  backgroundSwitch(game) {
    //TODO - make a switch case to remove classes
    // ie    document.body.classList.remove('lorem ipsum');
  }

  initGame(deck) {
    this.resetGame();
    this.shuffleDeck(deck);
    this.assignPos(deck);
    this.setState({deck:deck});
    this.splitDeck(deck);
    switch(deck) {
      case this.mortyDeck:
        this.setState(prevState => ({
          gamename: 'Rick & Morty',
          cardback: ramcardback
        }));
        document.body.classList.toggle("mariobg", false);
        document.body.classList.add("mortybg");
        break;
      case this.marioDeck:
        this.setState(prevState => ({
          gamename: 'Super Mario',
          cardback: mariocardback
        }));
        document.body.classList.toggle("mortybg", false);
        document.body.classList.add("mariobg");
        break;
      default:
        console.log('something went wrong, there doesnt appear to be a game name to set');
    }
  }

  contents(card) {
    let chosenCard = `${card.pos}status`;
    switch(this.state[chosenCard]) {
      case 'flipped':
        return <img src={require('./images/' +card.name+'.png')} className="cardface" alt="blah"/>
      case 'solved':
      return <img src={require('./images/' +card.name+'.png')} className="solved shake-little cardface" alt="blah"/>
      default:
      return <img src={this.state.cardback} className="cardback" alt="back of the card"/>;
    }
  }

  splitDeck(deck) {
    let a = deck.slice(0,7);
    let b = deck.slice(7,14);
    let c = deck.slice(7,9);
    let d = deck.slice(10,15);
    this.setState({rowA:a,rowB:b,rowC:c,rowD:d});
  }

  closeWinDialog() {
    this.setState({showWinDialog:false});
    this.resetGame();
  }

  render() {
    return (
      <div className="gameboard">
            <header className={this.state.gamename==="Rick & Morty" ? "rickandmorty col-12" : "supermario col-12"}>
              The Big {this.state.gamename} Memory Game Thing
            </header>
            <div class="container-fluid">
            <GameStats
                  mortyButton={this.initGame.bind(this, this.mortyDeck)}
                  marioButton={this.initGame.bind(this, this.marioDeck)}
                  restart={this.initGame.bind(this, this.state.deck)}
                  gamename={this.state.gamename}/>            
            </div>
            {this.state.deck.map(card => (
              <Card key={card.id} card={card} clickhandler={this.clickhandler} contents={this.contents}/>
            ))}
            {this.state.showWinDialog &&
              <WinSplash  clickhandler={this.closeWinDialog}
                          moves={this.state.moves}
                          rating={this.state.rating}            
              />  
            }
      </div>
    )
  }
}

const Card = (props) => {
  return <div key={props.key} onClick={props.clickhandler.bind(this, props.card)} className="col-lg-2 col-md-3 cardsquare">{props.contents.call(this, props.card)}</div>
}

const WinSplash = (props) => {
  return <div className="winsplash">
            hello you must have won or something big whoop.
            You did it in {props.moves} moves, giving you a rating of {props.rating}
            <button onClick={props.clickhandler}>x</button>
          </div>
}

export default Game;


import React, { Component } from 'react';
import './Game.css';
import * as data from './Decks.json';
import ramcardback from './images/ramcardback.png';
import mariocardback from './images/mariocardback.png';
import blankcardback from './images/blank.jpg';
import Menu from './Menu.js';
import WinSplash from './WinSplash.js';

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
    this.gamename='Rick and Morty';
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
      showWinDialog: false,
      showMenu: false,
      showIntro: true,
      cardback: ramcardback,
      a1status: 'default',
      a2status: 'default',
      a3status: 'default',
      a4status: 'default',
      a5status: 'default',
      a6status: 'default',
      a7status: 'default',
      a8status: 'default',
      a9status: 'default',
      a10status: 'default',
      a11status: 'default',
      a12status: 'default',
      a13status: 'default',
      a14status: 'default',
      a15status: 'default',
      a16status: 'default',
      a17status: 'default',
      a18status: 'default',
      a19status: 'default',
      a20status: 'default',
      a21status: 'default',
      a22status: 'default'
    };
    this.clickhandler = this.clickhandler.bind(this);
    this.flipBack = this.flipBack.bind(this);
    this.checkHand = this.checkHand.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.matchCheck = this.matchCheck.bind(this);
    this.checkHand = this.checkHand.bind(this);
    this.contents = this.contents.bind(this);
    this.menuToggle = this.menuToggle.bind(this);
    this.restartGame = this.restartGame.bind(this);
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
        if(this.pairs===11) {
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
            console.log('this card is already flipped');
            break;
          } else {
            this.checkHand(card);
          }
          break;
        case 'solved':
          // alert('this card is already solved');
        break;
        default:
          alert('something went wrong - this generally means a change to the deck has been made without updating positions.');
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
    let positions = ['a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14','a15','a16','a17','a18','a19','a20','a21','a22'];
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
      showWinDialog: false,
      rating: "*****",
      moves: 0,
      loadmenu: false,
      a1status: 'default',
      a2status: 'default',
      a3status: 'default',
      a4status: 'default',
      a5status: 'default',
      a6status: 'default',
      a7status: 'default',
      a8status: 'default',
      a9status: 'default',
      a10status: 'default',
      a11status: 'default',
      a12status: 'default',
      a13status: 'default',
      a14status: 'default',
      a15status: 'default',
      a16status: 'default',
      a17status: 'default',
      a18status: 'default',
      a19status: 'default',
      a20status: 'default',
      a21status: 'default',
      a22status: 'default'
    });
  }

  componentWillMount() {
    this.initGame(this.mortyDeck);
    document.body.classList.add('mortybg');
    document.body.classList.toggle("noscroll", true);

  }

  componentDidMount() {
    this.setState({loadmenu: true});
  }

  initGame(deck) {
    this.resetGame();
    this.shuffleDeck(deck);
    this.assignPos(deck);
    this.setState({deck:deck});
    this.splitDeck(deck);
    switch(deck) {
      case this.mortyDeck:
        this.gamename="Rick and Morty";
        this.setState(prevState => ({
          cardback: ramcardback
        }));
        document.body.classList.toggle("mariobg", false);
        document.body.classList.add("mortybg");
        break;
      case this.marioDeck:
        this.gamename="Super Mario";
        this.setState(prevState => ({
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
        return <img src={require('./images/' +card.name+'.jpg')} className="cardface" alt="blah"/>
      case 'solved':
      return <img src={require('./images/' +card.name+'.jpg')} className="solved cardface" alt="blah"/>
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

  menuToggle() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  restartGame() {
    this.initGame(this.state.deck);
    this.menuToggle();
  }

  hidesplash() {
    this.setState(prevState => ({
      showIntro: false
    }))
  }

  render() {
    return (
      <div>
        <div className="gameboard">
          {this.state.showIntro &&<Intro clickhandler={this.hidesplash.bind(this)}/>}
          <Icon clickhandler={this.menuToggle} contents="MENU"/>          
          {this.state.deck.map(card => (
            <div key={card.id} onClick={this.clickhandler.bind(this, card)} className="cardsquare">{this.contents.call(this, card)}</div>
          ))}
          <Icon optionalheading="MOVES" contents={this.state.moves}/>
        </div>
        {this.state.showMenu &&
          <Menu mortyButton={this.initGame.bind(this, this.mortyDeck)}
            marioButton={this.initGame.bind(this, this.marioDeck)}
            restart={this.restartGame}
            gamename={this.gamename}
            toggle={this.menuToggle}
          />
        }
        {this.state.showWinDialog &&
          <WinSplash  clickhandler={this.initGame.bind(this, this.state.deck)}
                      moves={this.state.moves}
                      rating={this.state.rating}
                      gamename={this.gamename}            
          />  
        }
      </div>
    )
  }
}

const Intro = (props) => {
  return <div onClick={props.clickhandler} className="introscreen">
            <h1>Harry's amazing Memory Game!</h1>
            <div>Find all 11 pairs in as few moves as possible.</div>
            <div>Open the menu to change decks.</div>
            <p>Click anywhere to start!</p>
          </div>
}

const Icon = (props) => {
  return <div onClick={props.clickhandler} className="icon">
          <img src={blankcardback} className="cardback" alt="white square"/>
          <div className="icon-label">
            <div>{props.optionalheading}</div>
            <div>{props.contents}</div>
          </div>
        </div>
}

export default Game;


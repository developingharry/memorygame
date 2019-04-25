import React, { Component } from 'react';
import './Game.css';
import * as data from './Decks.json';
import ramcardback from './images/ramcardback.png';
import mariocardback from './images/mariocardback.png';
import Menu from './Menu.js';

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
      showMenu: false,
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
      a22status: 'default',
      a23status: 'default',
      a24status: 'default'
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
    let positions = ['a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14','a15','a16','a17','a18','a19','a20','a21','a22','a23','a24'];
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
      a22status: 'default',
      a23status: 'default',
      a24status: 'default'
    });
  }

  componentWillMount() {
    this.initGame(this.mortyDeck);
    document.body.classList.add('mortybg');
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
      return <img src={require('./images/' +card.name+'.png')} className="solved cardface" alt="blah"/>
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

  render() {
    return (
      <div>
        <Hamburger showmenu= {this.state.showMenu} clickhandler={this.menuToggle.bind(this)}/>
        <div className="gameboard">
          {this.state.deck.map(card => (
            <Card key={card.id} card={card} clickhandler={this.clickhandler} contents={this.contents}/>
          ))}
        </div>
        {this.state.showWinDialog &&
          <WinSplash  clickhandler={this.initGame.bind(this, this.state.deck)}
                      moves={this.state.moves}
                      rating={this.state.rating}            
          />  
        }
        {this.state.showMenu &&
          <Menu mortyButton={this.initGame.bind(this, this.mortyDeck)}
                marioButton={this.initGame.bind(this, this.marioDeck)}
                restart={this.initGame.bind(this, this.state.deck)}
                gamename={this.state.gamename}/>
        }
      </div>
    )
  }
}

const Hamburger = (props) => {
      return <div className={props.showmenu === false ? "hamburger" : "hamburger change"} onClick={props.clickhandler}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
      </div>
}


const Card = (props) => {
  return <div onClick={props.clickhandler.bind(this, props.card)} className="cardsquare">{props.contents.call(this, props.card)}</div>
}

class WinSplash extends Component {
  rating(){
    switch(this.props.moves){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            return '5 stars';
        case 11:
        case 12:
            return '4 stars';
        case 13:
        case 14:
        case 15:
            return '3 stars';
        case 16:
        case 17:
        case 18:
            return '2 stars';
        default:
            return '1 star';
    }
}

  render() {
    return(
      <div className="winsplash">
        hello you must have won or something big whoop.
        You did it in {this.props.moves} moves, giving you a rating of {this.rating()}
        <button onClick={this.props.clickhandler}>x</button>
      </div>)
  }
}

export default Game;


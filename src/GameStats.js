import React, { Component } from 'react';
import './Game.css';

class GameStats extends Component {
    checkSomething(){
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
        return (
            <div className={this.props.gamename==="Rick & Morty" ? "rickandmorty row" : "supermario row"}>
                <div className="col-2">Moves: {this.props.moves}</div>
                <div className="col-2">Rating: {this.checkSomething.call(this)}</div>
                <div className="col-2">Pairs: {this.props.pairs}/8</div>
                <div className="newgamebuttons col-6">                
                    New Game:
                    <button className="mortybutton btn btn-info" onClick={this.props.mortyButton}>Rick & Morty</button>
                    <button className="mariobutton btn btn-danger" onClick={this.props.marioButton}>Super Mario</button>
                    <button className="restartbutton btn btn-success">restart</button>
                </div>
            </div>
        )
    }
}

export default GameStats;
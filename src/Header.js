import React, { Component } from 'react';
import './Game.css';

class Header extends Component {
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
            <div>
                <h1>The big memory game thing</h1>
                <hr/>
                <div>Moves: {this.props.moves}</div>
                <div>Rating: {this.checkSomething.call(this)}</div>
                <div>Pairs: {this.props.pairs}/8</div>
                <button onClick={this.props.mortyButton}>Rick & Morty</button>
                <button onClick={this.props.marioButton}>Super Mario</button>
                <hr/>
            </div>
        )
    }
}

export default Header;
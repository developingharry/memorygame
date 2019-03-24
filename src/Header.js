import React, { Component } from 'react';
import './Game.css';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>The big memory game thing</h1>
                <hr/>
                <div>Moves:{this.props.moves}</div>
                <button onClick={this.props.switch}>Switch decks</button>
                <hr/>
            </div>
        )
    }
}

export default Header;
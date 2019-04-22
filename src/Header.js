import React, { Component } from 'react';
import './Game.css';

class Header extends Component {
    render() {
        return (
            <div className={this.props.gamename==="Rick & Morty" ? "rickandmorty" : "supermario"}>
                <header>The Big {this.props.gamename} Memory Game Thing</header>
                <div className="newgamebuttons">
                    <button className="mortybutton" onClick={this.props.mortyButton}>R</button>
                    <button className="mariobutton" onClick={this.props.marioButton}>S</button>
                    <button className="restartbutton" onClick={this.props.restart}>r</button>
                </div>
            </div>
        )
    }
}

export default Header;
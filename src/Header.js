import React, { Component } from 'react';
import './Game.css';

class Header extends Component {
    render() {
        return (
            <div className={this.props.gamename==="Rick & Morty" ? "rickandmorty" : "supermario"}>
                <header>{this.props.gamename} Memory Game 1.0</header>
                <div className="newgamebuttons">
                    <div className="btn">
                        <button className="mortybutton" onClick={this.props.mortyButton}>R</button>
                    </div>
                    <div className="btn">
                        <button className="mariobutton" onClick={this.props.marioButton}>S</button>
                    </div>
                    <div className="btn">
                        <button className="restartbutton" onClick={this.props.restart}>R</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
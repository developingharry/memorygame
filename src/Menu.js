import React, { Component } from 'react';
import './Game.css';

class Menu extends Component {
    render() {
        return (
            <div className="menu">

                <div className="newgamelabel">New Game:</div>

                <div className="newgamebuttons">
                    <div className="btn">
                        <button className={this.props.gamename === "Rick & Morty" ? "disabled mortybutton" : "mortybutton"} onClick={this.props.mortyButton}>Rick & Morty</button>
                    </div>
                    <div className="btn">
                        <button className={this.props.gamename === "Super Mario" ? "disabled mariobutton" : "mariobutton"} onClick={this.props.marioButton}>Super Mario</button>
                    </div>

                </div>                    
                    <div className="btn">
                        <button className="restartbutton" onClick={this.props.restart}>Restart</button>
                    </div>
            </div>
        )
    }
}

export default Menu;




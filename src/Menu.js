import React, { Component } from 'react';
import './Game.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state={
            showMenu: false,
        };
    }

    toggleMenu() {
        this.setState(prevState => ({
            showMenu: !prevState.showMenu
        }));
    }

    showMenu() {
        this.toggleMenu();
        var menu = document.getElementById('menu');
        menu.classList.toggle("menu-static",false);
        menu.classList.toggle("menu-down",false);
        menu.classList.add("menu-up");
    }

    hideMenu() {
        this.toggleMenu();
        var menu = document.getElementById('menu');
        menu.classList.toggle("menu-up", false);
        menu.classList.add("menu-down");
        menu.classList.add("menu-static");

    }

    render() {
        return (
            <div className="menu-wrapper">
                <div>
                    {this.state.showMenu && <div><div id="clickmask" onClick={this.hideMenu.bind(this)}/></div>}
                    <MenuCard gamename = {this.props.gamename} mortyButton = {this.props.mortyButton} marioButton={this.props.marioButton} restart={this.props.restart}/>
                </div>
                {this.state.showMenu 
                    ?   <img className="cardbox" onClick={this.hideMenu.bind(this)} src={this.props.imagesrc} alt="card box"/>
                    :   <img className="cardbox" onClick={this.showMenu.bind(this)} src={this.props.imagesrc} alt="card box"/>
                }
            </div>
        )
    }
}

const MenuCard = (props) => {
    return  <div id="menu" className="menu-static">
                <div className="newgamelabel">New Game:</div>
                <div className="newgamebuttons">
                    <div className="btn">
                        <button className={props.gamename === "Rick & Morty" ? "disabled mortybutton" : "mortybutton"} onClick={props.mortyButton}>Rick & Morty</button>
                    </div>
                    <div className="btn">
                        <button className={props.gamename === "Super Mario" ? "disabled mariobutton" : "mariobutton"} onClick={props.marioButton}>Super Mario</button>
                    </div>
                </div>                    
                <div className="btn">
                    <button className="restartbutton" onClick={props.restart}>Restart</button>
                </div>
            </div>
}

export default Menu;




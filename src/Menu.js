import React, { Component } from 'react';
import './Game.css';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state={
            menuhidden: true
        };
    }

    clickhandler() {
        var menu = document.getElementById('menu');
        if(this.state.menuhidden===true) {
            console.log("raising menu");
            this.menuhidden=false;
            this.setState(prevState => ({
                menuhidden: false
            }));
            menu.classList.toggle("menu-hidden",false);
            menu.classList.toggle("menu-down",false);
            menu.classList.add("menu-up");
        } else {
            console.log("hiding menu");
            this.setState(prevState => ({
                menuhidden: true
            }));
            menu.classList.toggle("menu-up", false);
            menu.classList.add("menu-down");
            menu.classList.toggle("menu-static",true);
        }
    }

    render() {
        return(
            <div className="menu-wrapper">
                <div>
                    {/* click mask to prevent clicking through menu screen */}
                    {this.state.menuhidden===false && <div><div id="clickmask" onClick={this.clickhandler.bind(this)}/></div>}

                    {/* actual card the pops out with options on */}
                    <MenuCard gamename = {this.props.gamename} mortyButton = {this.props.mortyButton} marioButton={this.props.marioButton} restart={this.props.restart}/>
                </div>
                {/* <img className="cardbox" onClick={this.clickhandler.bind(this)} src={this.props.imagesrc} alt="card box"/> */}
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




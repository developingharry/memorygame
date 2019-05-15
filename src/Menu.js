import React from 'react';
import './Game.css';
import restart from './images/restart.png';
import ramlogo from './images/ramlogo.png';
import smlogo from './images/smlogo.png';



const Menu = (props) => {
    return(
        <div className={props.gamename === "Rick & Morty" ? "fullscreenmenu" : "fullscreenmenu"}>
            <h1 className="menu-heading">CHANGE DECK</h1>
            <div className="deckpicker">
                <img src={ramlogo} className="decklabel" onClick={props.mortyButton} alt="ram button"/>
                <img src={smlogo} className="decklabel" onClick={props.marioButton} alt="sm button"/>
                <h2 className="menu-heading" onClick={props.restart}>RESTART</h2>
                <h2 className="menu-heading" onClick={props.restart}>CLOSE MENU</h2>
            </div>

        </div>
    )
}

export default Menu;




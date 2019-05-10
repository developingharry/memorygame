import React from 'react';
import './Game.css';



const Menu = (props) => {
    return(
        <div className={props.gamename === "Rick & Morty" ? "fullscreenmenu mortybg" : "fullscreenmenu mariobg"}>
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
            <div className="btn">
                <button className="restartbutton" onClick={props.toggle}>Close</button>
            </div>
        </div>
    )
}

export default Menu;




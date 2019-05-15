import React, { Component } from 'react';
import './Game.css';
import mario from './images/splash/mario.gif';
import rick from './images/splash/tinyrick.gif';

class WinSplash extends Component {
    rating(){
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
                return '☆☆☆☆☆';
            case 11:
            case 12:
                return '☆☆☆☆';
            case 13:
            case 14:
            case 15:
                return '☆☆☆';
            case 16:
            case 17:
            case 18:
                return '☆☆';
            default:
                return '☆';
        }
    }

    render() {
        return(

            <div>
                              <div className="clickmask"></div>
                            <div className="winsplash">
  
                <div className="you-won">You won!</div>
                {this.props.gamename}
                {this.props.gamename === 'Rick and Morty' && <img className="win-animation" src={rick}/>}
                {this.props.gamename === 'Super Mario' && <img className="win-animation" src={mario}/>}
                <div className="rating">Rating:{this.rating()}</div>
                <div className="win-restart" onClick={this.props.clickhandler}>RESTART</div>
            </div>
            </div>
            
            
            
            
            
            )
    }
}

export default WinSplash;
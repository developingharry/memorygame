import React, { Component } from 'react';
import './Game.css';

class Row extends Component {
    render() {
        return (

            <div className="row no-gutters cardline">
                {this.props.cards.map(card => (
                    <div key={card.id}
                        onClick={this.props.clickhandler.bind(this, card)}
                        className="col-2 no-gutters card">
                    {this.props.contents.call(this, card)}
                    </div>
                ))}
            </div>
        )
    }
}

export default Row;
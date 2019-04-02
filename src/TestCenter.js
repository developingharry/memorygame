import React, { Component } from 'react';
import './Game.css';

class TestCenter extends Component {
    render() {
        return (
            <div className="TestCenter">
                Test Center
                <p>in the left hand is {this.props.lh}</p>
                <p>in the right hand is {this.props.rh}</p>
                <p>cardcounter is {this.props.cardCounter}</p>
                <button onClick={this.props.resetCounter}>reset counter</button>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                        </tr>
                        <tr>
                            <th>A</th>
                            <td>{this.props.a1}</td>
                            <td>{this.props.a2}</td>
                            <td>{this.props.a3}</td>
                            <td>{this.props.a4}</td>
                        </tr>
                        <tr>
                            <th>B</th>
                            <td>{this.props.b1}</td>
                            <td>{this.props.b2}</td>
                            <td>{this.props.b3}</td>
                            <td>{this.props.b4}</td>
                        </tr>
                        <tr>
                            <th>C</th>
                            <td>{this.props.c1}</td>
                            <td>{this.props.c2}</td>
                            <td>{this.props.c3}</td>
                            <td>{this.props.c4}</td>
                        </tr>
                        <tr>
                            <th>D</th>
                            <td>{this.props.d1}</td>
                            <td>{this.props.d2}</td>
                            <td>{this.props.d3}</td>
                            <td>{this.props.d4}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TestCenter;
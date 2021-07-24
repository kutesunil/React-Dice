import React, { Component } from 'react';
import Dise from './dise';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = ({
            roll1: 'one',
            roll2: 'one',
            isRollDice: false
        });
    }

    static defaultProps = {
        dice: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    updateDice = () => {
        let roll1 = Math.floor(Math.random() * this.props.dice.length);
        let roll2 = Math.floor(Math.random() * this.props.dice.length);

        this.setState({
            roll1: this.props.dice[roll1],
            roll2: this.props.dice[roll2],
            isRollDice: true
        });

        setTimeout ( () => {
            this.setState({
                isRollDice: false
            });
        }, 500);
    }
    render() {
        return (
            <>
                <div className="contrainer">
                    <div className="row">
                        <div className = "col-sm-12 text-center">
                            <h1> Dice Move</h1>
                        </div>
                        <div className="col-sm-5">
                            
                        </div>
                        <div className="col-sm-1">
                            <Dise dice = {this.state.roll1} />
                        </div>
                        <div className="col-sm-3">
                            <Dise dice = {this.state.roll2} />
                        </div>
                    </div>
                    <div className = "col-sm-12 text-center">
                        <button className="btn btn-danger" onClick={this.updateDice}>
                            {this.state.isRollDice ? "Rolling ..." : "Roll Dice"}
                        </button>
                    </div>
                </div>
            </> 
        );
    };
};

export default App;
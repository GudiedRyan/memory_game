import React from 'react';

class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flipped: false,
            value: ""
        }
    }
    render() {
        return(
            <div className="gameboard">
                <button onClick={this.button}>{this.state.flipped ? <p>{this.state.value}</p> : <p></p>}</button>
            </div>
        )
    }
    button = () => {
        this.setState(state => ({
            value: "x",
            flipped: !state.flipped
        }))
    }
}

export default Cards;
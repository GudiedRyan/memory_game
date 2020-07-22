import React from 'react';

class Cards extends React.Component {
    
    button = () => {
        this.props.button()
    }
    
    render() {
        return(
            <div className="gameboard">
                <button onClick={this.button}>{this.props.flipped ? <p>{this.props.value}</p> : <p></p>}</button>
            </div>
        )
    }
}

export default Cards;
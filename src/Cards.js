import React from 'react';

class Card extends React.Component {
    
    render() {
        return(
            <button
                id={this.props.cardData.id}
                flipped={this.props.cardData.flipped}
                value={this.props.cardData.value}
                onClick={this.props.flipCard}
            >
                {this.props.cardData.flipped? <p>{this.props.cardData.value}</p> : <p></p> }
            </button>
        )
    }
    flipCard = () => {
        this.props.flipCard()
    }
}

export default Card;
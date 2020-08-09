import React from "react";
import Card from "./Cards";

class Board extends React.Component {
// constructor(props){
//     super(props);
//     this.state = {

//     }
// }
render() {
    const gameboard = this.props.cardList.map((card, i) => {
        return (
            <Card 
                key = {i}
                id = {this.props.id}
                value = {this.props.value}
                flipped = {this.props.flipped}
            />
        )
    })
    return(gameboard);
}
}

export default Board;

//Basically we need to pass an index to each card so that
//when I call the flip function it flips the card with that index
//so like this:

//      cardSelect = (index) => {
//   if (this.state.flipped === false) {
//     this.setState(state => ({
//         flipped: !state.flipped,
//         flipCount: state.flipCount + 1
//     }))

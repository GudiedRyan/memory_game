import React from "react";
import Card from "./Cards";

class Board extends React.Component {
constructor(props){
    super(props);
    this.state = {

    }
}
render() {
    return(
        <div>
            <Card onClick={this.button} />
            <Card />
            <Card />
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

export default Board;
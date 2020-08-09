import React from 'react';
import './App.css';
import Card from './Cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      matches: 0,
      flipCount: 0,
      cardList: [
        {
            id: 1,
            value: "X",
            flipped: false
        },
        {
            id: 2,
            value: "X",
            flipped: false
        },{
            id: 3,
            value: "Y",
            flipped: false
        },{
            id: 4,
            value: "Y",
            flipped: false
        },
    ]
    }
  }
  render() {
  return (
    <div className="App">
      <h1>Memory Game!</h1>
      <p>The rules are quite simple: click a card to flip it over. Then try to find the card with the same symbol on it. 
        When you get a match, you get a point.</p>
        <div className="grid">
          {this.state.cardList.map((cardData,i) =>
          <div className="grid-item" key={i}>
            <Card cardData={this.state.cardList[i]} flipCard={this.flipCard}/>
          </div>
            )}
        </div>
        {this.state.flipCount}
    </div>
  );
}
flipCard = (event) => {
  const index = event.target.id -1;
  let newdata = [...this.state.cardList];
  newdata[index].flipped = !newdata[index].flipped;
  this.setState(state => ({
    cardList: newdata,
    flipCount: state.flipCount + 1
  }))
}

}

export default App;

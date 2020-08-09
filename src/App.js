import React from 'react';
import './App.css';
import Card from './Cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      matches: 0,
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
        {this.state.selected}
    </div>
  );
}
flipCard = (event) => {
  const index = event.target.id -1;
  let newdata = [...this.state.cardList];
  newdata[index].flipped = true;
  let chosen = [...this.state.selected];
  chosen.push(event.target.value)
  this.setState(state => ({
    cardList: newdata,
    selected: chosen
  }))

}

}

export default App;


//Issue when clicking same button multiple times
//Once match is obtained, set a state for that particular button to disabled
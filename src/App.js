import React from 'react';
import './App.css';
import Cards from './Cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      value: ""
    }
  }
  render() {
  return (
    <div className="App">
      <h1>Memory Game!</h1>
      <p>The rules are quite simple: click a card to flip it over. Then try to find the card with the same symbol on it. 
        When you get a match, you get a point.</p>
        <Cards 
        value="X"
        button={this.cardSelect}
        />
    </div>
  );
}
cardSelect = () => {
  this.setState(state => ({
      flipped: true
  }))
}
}

export default App;

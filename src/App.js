import React from 'react';
import './App.css';
import Cards from './Cards';

function App() {
  return (
    <div className="App">
      <h1>Memory Game!</h1>
      <p>The rules are quite simple: click a card to flip it over. Then try to find the card with the same symbol on it. 
        When you get a match, you get a point.</p>
        <Cards />
    </div>
  );
}

export default App;

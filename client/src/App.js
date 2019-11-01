import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import LightButton from './components/LightButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players: res.data
        })
      })
      .catch(err => console.log("No luck with that data", err))
  }

  render() {
    const playerList = this.state.players;

    return (
      <div className="App">
        <LightButton />
        <ul data-testid="unordered-list">
          {playerList.map(player => {
            return (
              <li key={player.id}>
                {`${player.name}, ${player.country}, Searches: ${player.searches}`}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;

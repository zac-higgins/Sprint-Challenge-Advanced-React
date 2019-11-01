import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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

  // componentDidUpdate() {

  // }

  render() {
    const playerList = this.state.players;
    return (
      <div className="App">
        <ul>
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

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello, Haasin.'
    };

    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    this.setState({
      string: 'What\'s up?'
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={this.handleButton}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;

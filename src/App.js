import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Glizzify
        </h1>
        <a
          className="App-link"
          href="https://spotify.com"
          target="_blank"
        >
          Spotify
        </a>
      </header>
    </div>
  );
}

export default App;

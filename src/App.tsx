import React from 'react';
import './App.css';
import { EntryButton } from './components/EntryButton.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Welcome to Silly Bus
      </header>
      <p>
        An App By: <br />
        <br />
        Jack Ellingwood, Drew Turgeon, Dawson Ferguson, Nicholas Keenan<br />
      </p>
      <main className = "Body">
        <EntryButton/>
      </main>
    </div>
  );
}

export default App;

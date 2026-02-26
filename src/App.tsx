import React from 'react';
import './App.css';
import { EntryButton } from './components/EntryButton.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Welcome to Silly Bus
      </header>
      <main className = "Body">
        <EntryButton/>
      </main>
      <p className='Footer'>
        An App By: <br />
        <br />
        Jack Ellingwood, Drew Turgeon, Dawson Ferguson, Nicholas Keenan, John Quinn<br />
      </p>

    </div>
  );
}

export default App;

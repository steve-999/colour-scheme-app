import React from 'react';

import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App-Container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

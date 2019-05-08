import React from 'react';

import Header from './components/Header';
import Weather from './components/Weather';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Weather></Weather>
    </div>
  );
}

export default App;

import React from 'react';
import { Profiles } from './components/profile/Profiles';
import { NavBar } from './components/header/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profiles/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Home } from './Modules/Home/';
import { Loader } from './Modules/Common/Components';
import { PlayArena } from './Modules/Play-Arena';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Loader /> */}
      <PlayArena />
    </div>
  );
}

export default App;

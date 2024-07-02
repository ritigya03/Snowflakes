import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Snowfall from 'react-snowfall';
import { color } from 'three/examples/jsm/nodes/Nodes.js';


function App() {
  return (
    <div className="App">
       <div className='head'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
    
      <Snowfall
          color="white"
          snowflakeCount={500}
          speed={[0.5, 3.0]}
          style={{ position: 'fixed', width: '100%', height: '100%', zIndex: '-1' }}
        />
      
    </div>
  );
}
export default App

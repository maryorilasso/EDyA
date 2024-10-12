import React from 'react';
import GifGrid from './components/GifGrid';

function App() {
  return (
    <div className="App">
      <h1>GIF App</h1>
      <GifGrid category="cats" />
    </div>
  );
}

export default App;

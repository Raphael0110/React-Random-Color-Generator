import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setcolor] = useState(randomColor);

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: color,
          padding: 120,
          height: 0,
          margin: 40,
        }}
      >
        {color}
        <button onClick={() => setcolor(randomColor)}>Generate</button>
      </div>
    </div>
  );
}

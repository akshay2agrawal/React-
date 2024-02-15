import { useState } from 'react';
import './App.css';
import Square from './components/Square';
import { e } from 'mathjs';

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <div>
        <Square  value={0}/>
        <Square value={0}/>
        <Square value={0}/>
      </div>

      <div>
        <Square value={0}/>
        <Square value={0}/>
        <Square value={0}/>
      </div>
            
      <div>
        <Square value={0}/>
        <Square value={0}/>
        <Square value={0}/>
      </div>
    </>
  )
}

export default App

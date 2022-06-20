import './App.css';
import Box from './Box';
import React, { useEffect, useState } from 'react';
import boxData from './boxData';


function App() {

  const [boxes, setBoxes] = useState(boxData);


  
  const boxElement = boxes.map(box => (
    <Box key={box.id} filled={box.on}/>
  ))

  return (
    <div className='container'>
      {boxElement}
    </div>
  );
}

export default App;

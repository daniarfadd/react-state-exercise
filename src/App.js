import './App.css';
import Box from './Box';
import React, { useEffect, useState } from 'react';
import boxData from './boxData';


function App() {

  const [boxes, setBoxes] = useState(boxData);

 
  
  // const objectBox = boxes.map(box => box.on)
  // console.log(objectBox)

  // this is a function that runs when the component is clicked
  function klik(id){
    // console.log(id)

    setBoxes(prevBoxesState => {
      let newBoxes = []
      for(let i = 0; i < prevBoxesState.length; i++){
        let currentBox = prevBoxesState[i]
        if(currentBox.id === id) {
          let updatedBox = {...currentBox, on: !currentBox.on}
          newBoxes.push(updatedBox)
        } else{
          newBoxes.push(currentBox)
        }
      }
      return newBoxes
    })
  }


// to see if the state is changing
 useEffect(() =>
 console.log(boxes),[boxes]
 )

  

  const boxElement = boxes.map(box => (
    <Box 
    key={box.id} 
    id={box.id} 
    filled={box.on}
    click={klik}
    />
  ))

  return (
    <div className='container'>
      {boxElement}
    </div>
  );
}

export default App;

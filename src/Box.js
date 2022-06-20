import React, { useState } from 'react';


function Box(props) {

   
    const [filled, setFilled] = useState(props.filled);
    
    function changeColor() {
        setFilled(prevFilledState => !prevFilledState);
    }

    const style = {
        backgroundColor: filled ? 'green' : '#fff',
        cursor: 'pointer'
    }

    // console.log(filled)
    return ( 
        <div className="box" style={style} onClick={props.click}>
            
        </div>
     );
}

export default Box;
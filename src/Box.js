import React, { useState } from 'react';


function Box(props) {

    const style = {
        backgroundColor: props.filled ? 'green' : '#fff',
        cursor: 'pointer',
        color: props.filled ? "aliceblue" : "black"
    }

    return ( 
        <div className="box" style={style} onClick={() => props.click(props.id)}>
            <h3>This is Box Number {props.id}</h3>
        </div>
     );
}

export default Box;
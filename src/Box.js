function Box(props) {

    const style = {
        backgroundColor: props.filled ? 'green' : '#fff',
    }

    return ( 
        <div className="box" style={style}>
            
        </div>
     );
}

export default Box;
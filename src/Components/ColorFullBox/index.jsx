import React, { useContext } from 'react'
import { BoxColorContext } from '../context-api/BoxColorContext'

const ColorFullBox = () => {
    const [color, setColor] = useContext(BoxColorContext);
    // console.log(color);
    return (
        <div>
            <div className='box' style={{ background: color }}></div>
            <button onClick={() => setColor('red')}>red</button>
            <button onClick={() => setColor('green')}>green</button>
            <button onClick={() => setColor('pink')}>pink</button>
            <button onClick={() => setColor('yellow')}>yellow</button>
            <button onClick={() => setColor('aqua')}>aqua</button>
        </div>
    )
}

export default ColorFullBox
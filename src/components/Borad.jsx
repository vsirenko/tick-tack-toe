import React from 'react'
import { Square } from './Square'

export const Borad = ({squares, click}) => {
    return (
        <div className='board'>
            {squares.map((square, i) => {
                return <Square  value={square} onClick={() => click(i)}/>
            })}
        </div>
    )
}

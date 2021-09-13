import React, { useState } from 'react'
import { Borad } from './Borad'
import { calculateWinner } from '../utils/helper'

export const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (i) => {
        const boardCopy = [...board]
        if(winner || boardCopy[i]) return
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }
    const startNewGame = () => {
        return (
            <button className='start__btn' onClick={() => {
                setBoard(Array(9).fill(null))
                setXIsNext(true)
            }}> Очистить поле </button>
        )
    }
    return (
        <div className='wrapper'>
            <Borad squares={board} click={handleClick}/>
            {startNewGame()}
            <div className="winner">
            {winner ? 'Победитель: ' + winner : 'Сейчас ходит: ' + (xIsNext ? 'X' : 'O')}
            </div>
        </div>
    )
}

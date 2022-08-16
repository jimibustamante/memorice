import React from 'react'
import { Setup, DifficultySelect, Button } from '../styles'
import { useGameContext } from '../contexts/game-context'

export default function SetupGame() {
  const [gameState, dispatch] = useGameContext()
  const { difficulty } = gameState

  const onChangeValue = (e) => {
    const { value } = e.target
    dispatch({ type: 'SET_DIFFICULTY', payload: value })
  }

  const onStartGame = () => {
    dispatch({ type: 'START_GAME' })
  }

  return (
    <Setup>
      <div className='setup-game'>
        <div className='setup-game-header'>
          <h1>Memory Game</h1>
        </div>
        <div className='setup-game-body'>
          <DifficultySelect className='setup-game-body-header'>
            <h2>Choose difficulty</h2>
            <div className='radio-container' onChange={onChangeValue}>
              <label>
                <input
                  type='radio'
                  value='easy'
                  name='difficulty'
                  checked={difficulty === 'easy'}
                />{' '}
                Easy
              </label>
              <label>
                <input
                  type='radio'
                  value='regular'
                  name='difficulty'
                  checked={difficulty === 'regular'}
                />{' '}
                Regular
              </label>
              <label>
                <input
                  type='radio'
                  value='hell'
                  name='difficulty'
                  checked={difficulty === 'hell'}
                />{' '}
                Hell
              </label>
            </div>
            <Button onClick={onStartGame}>Start</Button>
          </DifficultySelect>
        </div>
      </div>
    </Setup>
  )
}

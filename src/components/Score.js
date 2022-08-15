import React from 'react'
import { Score as ScoreStyles } from '../styles'
import { useGameContext } from '../contexts/game-context'

export default function Score() {
  const [gameState] = useGameContext()
  const { moves } = gameState
  return (
    <ScoreStyles>
      <span>Move: {moves}</span>
    </ScoreStyles>
  )
}

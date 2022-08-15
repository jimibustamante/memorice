import React from 'react'
import { Score as ScoreStyles } from '../styles'
import { useGameContext } from '../contexts/game-context'

export default function Score() {
  const [gameState] = useGameContext()
  const { moves } = gameState
  const label = moves <= 1 ? 'move' : 'moves'
  return (
    <ScoreStyles>
      <span>
        {label}: {moves}
      </span>
    </ScoreStyles>
  )
}

import React, { useState, useEffect, memo } from 'react'
import { Card as CardStyle } from '../styles'
import { useGameContext } from '../contexts/game-context'

function Card({ card, onFlipCard }) {
  const [flipped, setFlipped] = useState(false)
  const [gameState, dispatch] = useGameContext()
  const { flippedList, matchedCardId, uiLocked } = gameState

  const toggleFlip = () => {
    if (card.matched) return
    setFlipped((flipped) => !flipped)
    if (!flipped) {
      dispatch({ type: 'FLIP_CARD', payload: card })
    } else {
      dispatch({ type: 'FLIP_BACK_CARD', payload: card })
    }
    onFlipCard(card)
  }

  useEffect(() => {
    if (!flipped) return
    const flippedIds = flippedList.map((card) => card.id)
    if (!card.matched && !flippedIds.includes(card.id)) flipBack()
  }, [flippedList])

  useEffect(() => {
    if (matchedCardId?.includes(card.id)) {
      card.matched = true
    }
  }, [matchedCardId])

  const flipBack = () => {
    if (card.matched) return
    setFlipped(false)
  }

  return (
    <CardStyle uiLocked={uiLocked}>
      <div
        className={`card ${flipped ? 'is-flipped' : ''}`}
        onClick={toggleFlip}
      >
        <div className='card-face front' />
        <div className='card-face back'>
          <img src={card.imageURL} alt='Card' />
        </div>
      </div>
    </CardStyle>
  )
}

export default memo(Card)

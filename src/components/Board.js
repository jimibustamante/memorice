import React, { useEffect, useState, useCallback } from 'react'
import { useGameContext } from '../contexts/game-context'
import { Board as BoardStyle, BoardContainer as Container } from '../styles'
import Card from './Card'
import Score from './Score'
import CardModel from '../models/CardModel'
import { getRandomPic } from '../api/picturesApi'

const Board = () => {
  const [cards, setCards] = useState([])
  const [pictures, setPictures] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [gameState, dispatch] = useGameContext()
  const { flippedList, difficulty } = gameState

  const cardCount = useCallback(() => {
    switch (difficulty) {
      case 'easy':
        return 12
      case 'regular':
        return 24
      case 'hell':
        return 36
      default:
        return 24
    }
  }, [difficulty])

  const fetchImages = async () => {
    const pics = await getRandomPic(cardCount() / 2)
    dispatch({ type: 'SET_CARDS_COUNT', payload: cardCount() })
    setPictures(pics)
  }

  const onFlipCard = (cardFlipped) => {
    let list = Object.assign([], flippedCards)
    list.push(cardFlipped)
    setFlippedCards(list)
  }

  useEffect(() => {
    fetchImages()
  }, [])

  useEffect(() => {
    if (flippedList.length && flippedList.length % 2 === 0) {
      dispatch({ type: 'LOCK_UI' })
      dispatch({ type: 'MOVE' })
      const unmatchedPlipped = flippedList.filter((flippedCard) => {
        return !flippedCard.matched
      })
      if (unmatchedPlipped[0].picId === unmatchedPlipped[1].picId) {
        dispatch({
          type: 'MATCH',
          payload: [unmatchedPlipped[0].id, unmatchedPlipped[1].id],
        })
        dispatch({ type: 'UNLOCK_UI' })
      } else {
        setTimeout(() => {
          dispatch({ type: 'FLIP_BACK_ALL_CARDS' })
          dispatch({ type: 'UNLOCK_UI' })
        }, 1500)
      }
    }
  }, [flippedList, dispatch])

  useEffect(() => {
    if (!pictures || pictures?.length < 1) return
    let cardList = []
    pictures.forEach((pic) => {
      const cardA = new CardModel(`A${pic.id}`, pic)
      const cardB = new CardModel(`B${pic.id}`, pic)
      cardList.push(cardA)
      cardList.push(cardB)
    })
    cardList.sort(() => Math.random() - 0.5)
    setCards(cardList)
  }, [pictures, setCards])

  return (
    <Container>
      <Score />
      <BoardStyle>
        {cards.map((card) => {
          return <Card key={card.id} card={card} onFlipCard={onFlipCard} />
        })}
      </BoardStyle>
    </Container>
  )
}

export default Board

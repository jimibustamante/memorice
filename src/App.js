import { useEffect, useCallback } from 'react'
import Board from './components/Board'
import { GameContextProvider, useGameContext } from './contexts/game-context'
import { GameWrapper, Button } from './styles'
import SetupGame from './components/SetupGame'
import Modal from './components/Modal'

const Game = () => {
  const [gameState, dispatch] = useGameContext()
  const { gameStarted, matchedCardId, cardsCount, gameOver, moves } = gameState

  const setGameOver = useCallback(() => {
    setTimeout(() => {
      dispatch({ type: 'GAME_OVER' })
    }, 2000)
  }, [dispatch])

  useEffect(() => {
    if (matchedCardId.length === cardsCount) {
      setGameOver()
    }
  }, [matchedCardId, cardsCount, setGameOver])

  return (
    <GameWrapper>
      {gameOver && (
        <Modal>
          <h1>Game Over</h1>
          <p>
            You matched {matchedCardId.length} cards in {moves} moves
          </p>
          <Button onClick={() => dispatch({ type: 'RESET_GAME' })}>
            Play again
          </Button>
        </Modal>
      )}
      {gameStarted ? <Board /> : <SetupGame />}
    </GameWrapper>
  )
}

const App = () => {
  return (
    <GameContextProvider>
      <Game />
    </GameContextProvider>
  )
}

export default App

import Board from './components/Board'
import { GameContextProvider, useGameContext } from './contexts/game-context'
import { GameWrapper } from './styles'
import SetupGame from './components/SetupGame'

const Game = () => {
  const [gameState, dispatch] = useGameContext()
  const { gameStarted } = gameState
  return (
    <GameWrapper>
      {!gameStarted && <SetupGame />}
      {gameStarted && (
        <Board cardCount={24} rowsCount={6} columnCount={4} theme='default' />
      )}
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

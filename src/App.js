import Board from './components/Board'
import { GameContextProvider } from './contexts/game-context'
import SetupGame from './components/SetupGame';

const App = () => {
  return (
  <GameContextProvider>
    {/* <SetupGame />     */}
    <div className="memo-game">
      <Board cardCount={24} rowsCount={6} columnCount={4} theme='default' />
    </div>
  </GameContextProvider>
  );
}

export default App;

import Board from './components/Board';
import { GameContextProvider } from './contexts/game-context';

const App = () => {
  return (
  <GameContextProvider>
    <div className="memo-game">
      <Board cardCount={24} theme='default' />
    </div>
  </GameContextProvider>
  );
}

export default App;

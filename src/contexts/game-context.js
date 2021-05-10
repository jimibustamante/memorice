import React, { useReducer, useContext, createContext } from 'react';
const GameContext = createContext();

export const GameContextProvider = ({children}) => {
  const initialState = {
    flippedList: [],
    cardsCount: null,
    matchedCardId: [],
    uiLocked: false,
    moves: 0,
  };
  const reducer = (state, action) => {
    let list = [];
    let index = null;
    switch (action.type) {
      case 'FLIP_CARD':
        list = Object.assign([], state.flippedList);
        list.push(action.payload);
        return {...state, flippedList: list};
      case 'FLIP_BACK_CARD':
        list = Object.assign([], state.flippedList);
        index = list.map(card => card.id).indexOf(action.payload.id);
        list.splice(index, 1);
        return {...state, flippedList: list};
      case 'FLIP_BACK_ALL_CARDS':
        return {...state, flippedList: []};
      case 'MATCH':
        list = Object.assign([], state.matchedCardId);
        // let newFlipopedList = Object.assign([], state.flippedList);
        // newFlipopedList = newFlipopedList.filter((card) => {
        //   return !action.payload.includes(card.id);
        // });
        list = list.concat(action.payload);
        return {...state, matchedCardId: list};
      case 'LOCK_UI':
        return {...state, uiLocked: true};
      case 'UNLOCK_UI':
        return {...state, uiLocked: false};
      case 'MOVE':
        return {...state, moves: state.moves + 1};
      default: throw new Error('Unexpected action: ' + action.type);
    }
  };
  const contextValue = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const contextValue = useContext(GameContext);
  return contextValue;
};

import React from 'react';
import ModeButtonContainer from './components/ModeContainer';
import OperationContainer from './components/OperationContainer';
import CellsContainer from './components/CellsContainer';

const App = () => {
  return (
    <div className='tictactoe'>
      <h1>Let's Play Tic-Tac-Toe</h1>
      <ModeButtonContainer />
      <CellsContainer />
      <OperationContainer />
    </div>
  );
};


export default App;

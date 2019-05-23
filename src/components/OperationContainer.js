import React from 'react';
import { connect } from 'react-redux';
import { initOnePlayer, initTwoPlayers, closeHint } from '../action';

const OperationButton = ({ content, onClick }) => 
  <div
    className='tictactoe-opr-btn'
    onClick={onClick}
  >
    {content}
  </div>;

const OperationContainer = ({ 
  player,
  initOnePlayer,
  initTwoPlayers,
  closeHint
}) => {
  
  const onClickRestart = () => {
    player === 'one' ? initOnePlayer() : initTwoPlayers();
    closeHint();
  };

  return (
    <div className='tictactoe-opr'>
      <OperationButton
        content='RESTART'
        onClick={onClickRestart}
      />
      {/* Todo: feature undo */}
      {/* <OperationButton
        content='UNDO'
        onClick={() => {}}
      /> */}
    </div>
  );
};

const mapStateToProps = state => ({
  player: state.gameInfo,
});

export default connect (
  mapStateToProps,
  { initOnePlayer, initTwoPlayers, closeHint }
)(OperationContainer);
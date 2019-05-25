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
  playMode,
  initOnePlayer,
  initTwoPlayers,
  closeHint
}) => {
  
  const onClickRestart = () => {
    playMode === 1 ? initOnePlayer() : initTwoPlayers();
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
  playMode: state.gameInfo.playMode,
});

export default connect (
  mapStateToProps,
  { initOnePlayer, initTwoPlayers, closeHint }
)(OperationContainer);
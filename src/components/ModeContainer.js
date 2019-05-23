import React from 'react';
import { connect } from 'react-redux';
import { initOnePlayer, initTwoPlayers, closeHint } from '../action';

const ModeButton = ({ content, onClick }) => 
  <div
    className='tictactoe-mode-btn'
    onClick={onClick}
  >
    {content}
  </div>;

const ModeContainer = ({ 
  initOnePlayer, 
  initTwoPlayers, 
  closeHint
}) => {
  const onClickOnePlayer = () => {
    initOnePlayer();
    closeHint();
  };
  
  const onClickTwoPlayers = () => {
    initTwoPlayers();
    closeHint();
  };

  return (
    <div className='tictactoe-mode'>
      <ModeButton
        content='1 Player'
        onClick={onClickOnePlayer}
      />
      <ModeButton
        content='2 Players'
        onClick={onClickTwoPlayers}
      />
    </div>
  );
};

export default connect(
  null,
  { initOnePlayer, initTwoPlayers, closeHint }
)(ModeContainer);
import React from 'react';

/**
 *  Props:
 *  @content {String} the hint content
 */
export default ({ content }) => {
  return (
    <div className='tictactoe-hint'>
      <div>{content}</div>
    </div>
  );
};
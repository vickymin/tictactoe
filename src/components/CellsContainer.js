import React from 'react';
import { connect } from 'react-redux';
import { onClickCell, showHint } from '../action';
import HintContainer from './HintContainer';
import { checkResult, getHintContent } from '../helper';

const CellsContainer = ({
  hint,
  gameInfo,
  onClickCell,
  showHint,
}) => {

  const cellArr = [0, 1, 2];
  const { hintContent, isShowingHint } = hint;
  const { cells, flag, player } = gameInfo;

  const clickCell = (row, col) => {
    onClickCell(row, col);
    const result = checkResult(row, col, cells);
    if (result) {
      showHint(getHintContent(result, flag));
    }
  };

  return (
    <div className='tictactoe-cells-container'>
      {
        isShowingHint &&
        <HintContainer content={hintContent} />
      }
      {
        cellArr.map(row => 
          cellArr.map(col => {
            const cellId = `tictactoe-cell-${row}-${col}`;
            return <div
              className='tictactoe-cell'
              key={cellId}
              id={cellId}
              onClick={() => clickCell(row, col)}
            >
              { 
                cells && (
                cells[row][col] === 1 ? 'X' :
                cells[row][col] ? 'O' : ' ')
              }
            </div>;
          })
        )
      }
    </div>
  );
};

const mapStateToProps = state => ({
  hint: state.hint,
  gameInfo: state.gameInfo,
});

export default connect(
  mapStateToProps,
  { onClickCell, showHint }
)(CellsContainer);
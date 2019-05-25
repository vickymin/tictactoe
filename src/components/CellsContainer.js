import React from 'react';
import { connect } from 'react-redux';
import { onClickCell, showHint } from '../action';
import HintContainer from './HintContainer';
import { checkResult, getHintContent, getComputerClickCell } from '../helper';

const CellsContainer = ({
  hint,
  gameInfo,
  onClickCell,
  showHint,
}) => {

  const cellArr = [0, 1, 2];
  const { hintContent, isShowingHint } = hint;
  const { cells, flag, playMode } = gameInfo;

  const clickCell = (row, col, e) => {
    if (cells[row][col]) {
      e.preventDefault();
      return;
    }
    onClickCell(row, col);
    let result = checkResult(row, col, cells);
    if (result) {
      showHint(getHintContent(result, flag));
    }
    // simulate computer
    // Todo: move check result to redux action
    if (!result && playMode === 1) {
      const computerClickCell = getComputerClickCell(cells);
      const { row: computerRow, col: computerCol } = computerClickCell;
      onClickCell(computerRow, computerCol);
      result = checkResult(computerRow, computerCol, cells);
      if (result) {
        showHint(getHintContent(result, 1));
      }
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
              onClick={(e) => clickCell(row, col, e)}
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
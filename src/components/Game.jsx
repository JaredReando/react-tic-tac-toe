import React from 'react';
import Board from './Board';
import { connect } from 'react-redux';
import store from '../index'

const Game = ({activeLetter, subscribe}) => {

console.log("active letter: ", activeLetter)
  function handleNewThing(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: "SHOW_MESSAGE"
    };
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board/>
      </div>
      <div className="game-info">
        <div>{   }</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activeLetter: state.activeLetter
  }
}

// console.log("store is: ", props.store)
// store.subscribe(() => console.log('sub triggered'))

//REDEFINES THE ENTIRE COMPONENT AS THE RETURN VALUE OF 'CONNECT()'
//NOTATION HERE CAN ALSO READ 'export default connect()(Game)' AS ONE LINE OF CODE
// Game = connect()(Game);
//
export default connect(mapStateToProps)(Game);

import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      squares: Array(9).fill(null),
      activeLetter: 'X'
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handleToggleLetter = this.handleToggleLetter.bind(this)
  }


  handleClick(i) {
    if (this.calculateWinner(this.state.squares) || this.state.squares[i]) {
      return;
    }
    this.setState( (state) => {
      return {
        history: [...state.history, {squares: state.squares.slice()}],
        squares: state.squares.map((block,index)=> index == i ? this.state.activeLetter: block),
        activeLetter: state.activeLetter === 'X' ? 'O' : 'X',
        moves: state.moves++};
    });
  }

  handleUndo() {

    if (this.state.history.length<1) {
      return;
    }

    this.setState((state) => {

      return {
        squares: state.history[state.history.length-1].squares,
        history: state.history.slice(0,state.history.length-1),
        activeLetter: state.activeLetter === 'X' ? 'O' : 'X',
      };
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }



  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;

    if (winner) {
      status = `Player ${winner} won!`;
    } else { status='Next Player: '+ this.state.activeLetter; }
    // const status='Next Player: '+ this.state.activeLetter;
    return (<div>
      <div className="status">{status}</div>

      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
      <button onClick={()=>this.handleUndo()}>Undo</button>

    </div>);
  }
}

export default Board;

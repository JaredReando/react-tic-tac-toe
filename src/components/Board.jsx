import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      activeLetter: 'X'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleToggleLetter = this.handleToggleLetter.bind(this)
  }

  handleToggleLetter() {
    this.setState((state) => {
      return {activeLetter: state.activeLetter === 'X' ? 'O' : 'X'}
    })
  }

  handleClick(i) {
    this.setState( (state) => {
      return {squares: state.squares.map((block,index)=> index == i ? this.state.activeLetter: block)}
    })
    this.handleToggleLetter()
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status='Next Player: X';
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


    </div>);
  }
}

export default Board;

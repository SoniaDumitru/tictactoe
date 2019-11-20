import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      board: Array(9).fill(null),
      player: "X",
      winner: ''
    }
  }

  checkWinner=()=> {
    let winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

    for (let index = 0; index < winLines.length; index++) {
      const [a,b,c] = winLines[index]
      if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
        alert('You Won!')
        this.setState({
          winner: this.state.player
        })
      }
    }
  }

  handleClick =(index)=> {
    let newBoard = this.state.board
    //we have to have an emplty cell and the winner is not set
    if(this.state.board[index] === null && !this.state.winner) {
      newBoard[index] = this.state.player
      this.setState({
        board: newBoard,
        player: this.state.player === "X" ? "O" : "X"
      })
      this.checkWinner()
    }
  }


  render() {

    const Box = this.state.board.map(
      (box, index) => <div className="box"
      onClick={() => this.handleClick(index)}
      key={index}>{box}</div>)

    return (

      <div className="container">
        <h1>Tic Tac Toe App</h1>

        <div className='board'>
        {Box}
        </div>

      </div>
    );
  }
}

export default App;

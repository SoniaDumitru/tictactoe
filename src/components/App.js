import React from 'react';
import '../App.css';
import Status from './Status.js'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
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
    this.checkMatch(winLines)
  }

  checkMatch =(winLines)=> {
    for (let index = 0; index < winLines.length; index++) {
      const [a,b,c] = winLines[index]
      let board = this.state.board
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert('You Won!')
        this.setState({
          winner: this.state.player
        })
      }
    }
  }

  handleClick =(index)=> {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board
      //we have to have an emplty cell and the winner is not set
      if(this.state.board[index] === null) {
        newBoard[index] = this.state.player
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        })
        this.checkWinner()
    }
  }
}

  setPlayer =(player)=> {
    this.setState({
      player: player
    })
  }

  renderBoxes =()=> {
    return this.state.board.map(
      (box, index) =>
      <div className="box"
        onClick={() => this.handleClick(index)}
        key={index}>{box}
      </div>)
  }

  reset =()=> {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null),
    })
  }

  render() {

    return (

      <div className="container">
            <h1>Tic Tac Toe App</h1>
          <Status
            player={this.state.player}
            setPlayer={(event) => this.setPlayer(event)}
            winner={this.state.winner}/>

          <div className='board'>
            {this.renderBoxes()}
          </div>
          
          <div>
            <button
            disabled={!this.state.winner}
            onClick={() => this.reset()}>Reset</button>
          </div>
      </div>
    );
  }
}

export default App;

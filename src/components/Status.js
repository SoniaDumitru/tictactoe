import React from 'react'
import Player from './ChoosePlayer.js'

class Status extends React.Component {

//passing from this App to Status to ChoosePlayer
  handleSetPlayer =(event)=> {
    this.props.setPlayer(event)
  }

  renderHtml =()=> {
    if (this.props.winner) {
      return <h2>Winner is {this.props.winner}</h2>
    } else {
      return this.props.player ?
      <h2>Next Player is: {this.props.player}</h2> :
      <Player player={(event) => this.handleSetPlayer(event)}/>
    }
  }

  render() {
    console.log(this.props.winner);
    return(
      <span>
      {this.renderHtml()}
      </span>
    )
  }
}

export default Status

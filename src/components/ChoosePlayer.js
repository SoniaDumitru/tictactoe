import React from 'react'

class Player extends React.Component {

handleForm =(event)=> {
  event.preventDefault();
  this.props.player(event.target.player.value)
}


render() {
  console.log(this.props.player)
  return(
      <form onSubmit={(event)=>this.handleForm(event)}>
        <label>
          <input type="radio" name="player" value="X"/>
          Player X
        </label>
      <label>
        <input type="radio" name="player" value="O"/>
          Player O
      </label>
      <div>
        <label>
          <input type="submit" value="Start"/>
        </label>
      </div>
    </form>
  )
}
}

export default Player

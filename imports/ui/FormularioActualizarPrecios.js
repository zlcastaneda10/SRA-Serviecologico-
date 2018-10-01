import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            playerName:null
        }
    }

    
  render() {
    console.log(this.props)
  return (
    <div>
      <AccountsUIWrapper/>  
      <h1>Meteor Race</h1>
      <ul>
          {this.renderRunners()}
      </ul>
      {
          this.state.playerName?<button onClick={this.run.bind(this)}>Run!!</button> :
          <form onSubmit={this.addRunner.bind(this)}>
              <input
                  type="text"
                  ref = {(inp)=> this.inName=inp}
                  placeholder = "Enter your name"
              />
      
      </form>
      }
      
    </div>
  )
}
}
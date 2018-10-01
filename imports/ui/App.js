import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types'


import {Runners} from '../api/runners.js';
import FormEmpresa from './FormEmpresa.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            playerName:null
        }
    }

    renderRunners(){
        return this.props.runners.map((r,i)=>{
            return(<li key={i}
            style={{
                position: 'relative',
                left: `${r.pos}%`
            }}
            >{r.name}</li>)
        }

        );
    }

    addRunner(e){
        e.preventDefault();
        const name = this.inName.value;
        let id;

        const player = Runners.findOne({
            name: name
        });
        if(!player){
            id = Runners.insert({
                name: name,
                pos:0
            });
        }else{
            id = player._id;
        }


        
        this.setState({
            playerName: name,
            playerId: id
        });

    }

    run(){
        Runners.update(
            this.state.playerId,
            {
                $inc:{pos:1}
            }
        )
    }


  render() {
      console.log(this.props)
    return (
      <div>
        <AccountsUIWrapper/>
        <FormEmpresa/>  
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

App.propTypes ={
    runners: PropTypes.array.isRequired
}

export default withTracker(()=>{
    return{
        runners: Runners.find({}).fetch(),
    };
})(App);

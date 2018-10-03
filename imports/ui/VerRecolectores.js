import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';


import {Recolectores} from '../api/recolectores.js';

class VerRecolectores extends Component {


    renderRunners(){
        console.log(Meteor.users.find().fetch());
        return this.props.recolectores.map((r,i)=>{
          
            return(
                <h2>holi</h2>)
        }
        );
    }



  render() {
    return (
      <div>
        <h1>Aqui los recolectores</h1>
        <ul className='list-group'>
            {this.renderRunners()}
        </ul>
      </div>
    )
  }
}

VerRecolectores.propTypes = {
    recolectores: PropTypes.object.isRequired
  };
  
  export default withTracker(() => {
    Meteor.subscribe('users');
  
    return {
      recolectores: Meteor.users.find({}),
    };
  })(VerRecolectores);

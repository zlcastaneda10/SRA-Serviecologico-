import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import {Recolectores} from '../api/recolectores.js';

class VerRecolectores extends Component {


    renderRunners(){
        return this.props.recolectores.map((r,i)=>{
            return(
                <li key={i} className='list-group-item'>
                    <h3>{r.nombre}</h3>
                    Telefono: {r.telefono}
                    <br/>
                    <button className="btn btn-success">Asignar recoleccion</button>
                </li>)
        }
        );
    }



  render() {
    return (
      <div>
        <ul className='list-group'>
            {this.renderRunners()}
        </ul>
      </div>
    )
  }
}

VerRecolectores.propTypes = {
    recolectores: PropTypes.array.isRequired
  };
  
  export default withTracker(() => {
    Meteor.subscribe('recolectores');
  
    return {
      recolectores: Recolectores.find({}).fetch(),
    };
  })(VerRecolectores);

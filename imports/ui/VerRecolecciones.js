import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import {Recolecciones} from '../api/recolecciones.js';

 class VerRecolecciones extends Component {

    constructor(props){
        super(props);
        this.state={
            
        }
        
    }

    asignarRecoleccion(id){
        Meteor.call('recolecciones.asignar',id);
    }

    renderRecolecciones(){
        return this.props.recolecciones.map((r,i)=>{
            return(
                <li key={i} className="list-group-item">
                 <h3>Recoleccion a: {r.empresa}</h3>
                 <strong>Fecha:</strong> {r.fecha}<br/>
                 <strong>Hora:</strong> {r.hora}<br/>
                 <strong>Estado:</strong> {r.estado}<br/>
                 <button className='btn btn-success' onClick={this.asignarRecoleccion.bind(this,r._id)}>Aceptar Recoleccion</button>
                 </li>
            );
        })
    };



  render() {
    return (
      <div>
        <ul className="list-group">
            {this.renderRecolecciones()}
        </ul>
      </div>
    )
  }
}

VerRecolecciones.propTypes ={
    recolecciones: PropTypes.array.isRequired
}

export default withTracker(()=>{
    Meteor.subscribe('recolecciones');
    return{
        recolecciones: Recolecciones.find({}).fetch(),
    };
})(VerRecolecciones);

import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import {Recolecciones} from '../api/recolecciones.js';

 class VerRecoleccionesTerminadas extends Component {

    constructor(props){
        super(props);
        this.state={  //  State vacio, se puede omitir
            
        }
        
    }

    renderRecolecciones(){
        return this.props.recolecciones.map((r,i)=>{
            return(
                <li key={i} className="list-group-item">
                 <h3>Recoleccion a: {r.empresa}</h3>
                 <strong>Fecha:</strong> {r.fecha}<br/>
                 <strong>Hora:</strong> {r.hora}<br/>
                 <strong>Recolector:</strong> {r.recolector}<br/>
                 <strong>Estado:</strong> {r.estado}<br/>
                 <strong>Valor Total:</strong> {r.total}<br/>
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

VerRecoleccionesTerminadas.propTypes ={
    recolecciones: PropTypes.array.isRequired
}

export default withTracker(()=>{
    Meteor.subscribe('recoleccionesTerminadas');
    return{
        recolecciones: Recolecciones.find({}).fetch(),
    };
})(VerRecoleccionesTerminadas);

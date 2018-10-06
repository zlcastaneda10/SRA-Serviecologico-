import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';


import {ProcesarRecoleccion} from './ProcesarRecoleccion.js'
import {Recolecciones} from '../api/recolecciones.js';

 class MisRecolecciones extends Component {

    constructor(props){
        super(props);
        this.state={
            
        }
        
    }

    desasignarRecoleccion(id){
        Meteor.call('recolecciones.desasignar',id);
    }

    renderRecolecciones(){
        return this.props.recolecciones.map((r,i)=>{
            return(
                <li key={i} className="list-group-item">
                 <h3>Recoleccion a: {r.empresa}</h3>
                 <strong>Fecha:</strong> {r.fecha}<br/>
                 <strong>Hora:</strong> {r.hora}<br/>
                 <strong>Estado:</strong> {r.estado}<br/>
                 <button className='btn btn-success' onClick={this.desasignarRecoleccion.bind(this,r._id)}>Rechazar Recoleccion</button>
                 <ProcesarRecoleccion empresa={r.empresa}/>
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

MisRecolecciones.propTypes ={
    recolecciones: PropTypes.array.isRequired
}

export default withTracker(()=>{
    Meteor.subscribe('misRecolecciones');
    return{
        recolecciones: Recolecciones.find({}).fetch(),
    };
})(MisRecolecciones);

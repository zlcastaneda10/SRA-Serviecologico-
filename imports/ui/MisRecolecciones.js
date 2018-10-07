import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';


import {ProcesarRecoleccion} from './ProcesarRecoleccion.js'
import {Recolecciones} from '../api/recolecciones.js';
import {Materiales} from '../api/materiales.js';
import { Empresas } from '../api/empresas.js';

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
                 <button type="button" className="btn btn-success" onClick={this.ProcesarRecoleccion.bind(this,r._id)}>Procesar recoleccion</button>
                </li>
            
            );
        })
    };

    ProcesarRecoleccion(id){
        localStorage.setItem('recoleccion', id);
        window.location.assign("/procesarRecoleccion")
    }


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
    recolecciones: PropTypes.array.isRequired,
    materiales: PropTypes.array.isRequired
}

export default withTracker(()=>{
    Meteor.subscribe('misRecolecciones');
    Meteor.subscribe('materiales');
    Meteor.subscribe('empresasPorNombre')
    return{
        recolecciones: Recolecciones.find({}).fetch(),
        materiales: Materiales.find({}).fetch(),
    };
})(MisRecolecciones);

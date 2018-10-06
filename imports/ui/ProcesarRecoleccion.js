import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';


import {Recolecciones} from '../api/recolecciones.js';
import PropTypes from 'prop-types';

export class ProcesarRecoleccion extends Component {
    constructor(props){
        super(props);
        this.state={
            
        };

        // Aqui van los bind 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // EventHandlers
    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
        }

    handleSubmit(event) {

        let recoleccion ={
            empresa: this.state.empresa,
            recolector:this.state.recolector,
            fecha: this.state.fecha,
            hora: this.state.hora,
            estado: this.state.estado
        }
        
        Meteor.call('recolecciones.add', recoleccion);

        this.setState({
            fecha: '',
            hora:'',
        });
      
        
    }
    renderEmpresa()
    {

    }   
  render() {
    return (
        <div className="container">
        <h1>Procesar Recolección</h1>
        <h2>Empresa Cliente</h2>
            {this.renderEmpresa()}
        <form onSubmit={this.handleSubmit}>
            <h1>Materiales a recolectar</h1>
            <div className="form-group">
                <label>Materiales</label>
                <select className='form-control'name='empresa' value={this.state.empresa} onChange={this.handleChange}>
                    
                </select>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>      
        </form>                    
    </div>
    )
  }
}

ProcesarRecoleccion.propTypes = {
    empresas: PropTypes.array.isRequired
  };
  
  export default withTracker(() => {
    Meteor.subscribe('empresasPorNombre', this.state.nomEmpresa);
    Meteor.subscribe('recolecciones');
    Meteor.subscribe('materiales');

    return{
        empresas: Empresas.find({}).fetch(),
        user: Meteor.user(),
    };
    
  })(ProcesarRecoleccion);

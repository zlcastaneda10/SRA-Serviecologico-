import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';


import {Recolecciones} from '../api/recolecciones.js';
import {Materiales} from '../api/materiales.js';
import {Empresas} from '../api/empresas.js';
import PropTypes from 'prop-types';

class ProcesarRecoleccion extends Component {
    constructor(props){
        super(props);
        this.state={
            
        };

        // Aqui van los bind 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderMateriales = this.renderMateriales.bind(this);
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

    renderMateriales(){
        return this.props.materiales.map((r,i)=>{
            return([
                
                    <div>
                        <label>{r.material}</label>
                    <input type = "number"
                            key={i}
                            name = {r.material}
                            id= {r.material + "_cantidad"}
                            ref = {(inp)=> this.inName=inp}
                            placeholder = "cantidad"
                    />
                    <input type = "text"
                    key={i}
                    name = {r.material}
                    id= {r.material + "_precio"}
                    ref = {(inp)=> this.inName=inp}
                    placeholder = {r.precio}
                    />
                    <label>00</label>
                </div>  
                    ]
            )
        }
    
        );
      }  

  render() {
    return (
        <div className="container">
        <h1>Procesar Recolección</h1>
        <h2>Empresa Cliente</h2>
           
        <form onSubmit={this.handleSubmit}>
            <h1>Materiales a recolectar</h1>
            <div className="form-group">
                {this.renderMateriales}                
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
    empresas: PropTypes.array.isRequired,
    materiales: PropTypes.array.isRequired
  };
  
  export default withTracker(() => {
    Meteor.subscribe('empresasPorNombre', this.state.nomEmpresa);
    Meteor.subscribe('recolecciones');
    Meteor.subscribe('materiales');

    return{
        materiales: Materiales.find({}).fetch(),
        empresas: Empresas.find({}).fetch(),
        user: Meteor.user(),
    };
    
  })(ProcesarRecoleccion);

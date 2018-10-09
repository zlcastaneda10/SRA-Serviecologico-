import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';


import {Materiales} from '../api/materiales.js';
import {Recolecciones} from '../api/recolecciones.js';
import {Empresas} from '../api/empresas.js';

class ProcesarRecoleccion extends Component {
    constructor(props){
        super(props);
        this.state={
            recoleccion: 0,
            precio: 0,
            cantidad: 0
            
        };
        this.state.recoleccion = localStorage.getItem('recoleccion')
        // Aqui van los bind 
        this.handleChange = this.handleChange.bind(this);
        this.calcularTotales = this.calcularTotales.bind(this);
        this.volver = this.volver.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calcularTotalGlobal= this.calcularTotalGlobal.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let total =  document.getElementById("total_global").value   // Preferible hacer esto usando refs
        Meteor.call('recolecciones.procesar', this.state.recoleccion, total);   
        this.volver();     
    }

    renderMateriales(){
        return this.props.materiales.map((r,i)=>{
            return([
                
                <div>
                    <h4>{r.material}</h4>
                    <h6>cantidad</h6>
                    <input type = "number"
                            key={this.state.recoleccion+ "_cantidad"+r.material}
                            name = {this.state.recoleccion+ "_cantidad"+r.material}
                            id= {this.state.recoleccion+ "_cantidad"+r.material}
                            ref = {(inp)=> this.inName=inp}
                            placeholder = "cantidad"
                            onChange={this.handleChange}
                            className="form-control"
                    />
                    <h6>precio</h6>
                    <input type = "text"
                    key={this.state.recoleccion+ "_precio"+r.material}
                    name = {this.state.recoleccion+ "_precio"+r.material}
                    id= {this.state.recoleccion + "_precio"+r.material}
                    ref = {(inp)=> this.inName=inp}
                    value = {r.precio}
                    onChange={this.handleChange}
                    className="form-control"
                    />
                     <h6>total</h6>
                    <input key={this.state.recoleccion+ "_total"+r.material} className="form-control" type="text" id= {this.state.recoleccion+ "_total"+r.material} disabled />
                    <br/>
                </div>  
                    ]
            )
        }
    
        );
      }
      
      calcularTotales(e) {
        e.preventDefault()
        this.props.materiales.map((r,i)=>{
        let cantidad = document.getElementById(this.state.recoleccion+ "_cantidad"+r.material).value
        let precio = document.getElementById(this.state.recoleccion+ "_precio"+r.material).value
        let total = cantidad * precio
        console.log(cantidad*precio)
        let camilo =document.getElementById(this.state.recoleccion+ "_total"+r.material)
        camilo.value = total
        }
        );
      }

    volver(){
        window.location.assign("/misRecolecciones")
    }

    calcularTotalGlobal(e){
        e.preventDefault()
        let totalGlobal = 0
        this.props.materiales.map((r,i)=>{
            let cantidad = parseInt(document.getElementById(this.state.recoleccion+ "_total"+r.material).value)
            console.log(cantidad)
            totalGlobal = totalGlobal+ cantidad
        });
        let camilo =document.getElementById("total_global") // Preferible hacer esto usando refs
        camilo.value = totalGlobal
    }
  render() {
    return (
        <div className="container">
        <h1>Procesar Recolección</h1>
        <button onClick={this.volver} className="btn btn-success">Volver</button> 
        <form onSubmit={this.handleSubmit}>
            <h1>Materiales a recolectar</h1>
            <div className="form-group">
                {this.renderMateriales()}
            </div>
            <br/>
            <strong>Valor a pagar: </strong> <input key="total_global" className="form-control" type="text" id= "total_global" disabled /><br/>
            <button onClick={this.calcularTotales} className="btn btn-success">Calcular Totales</button>
            &emsp; 
            <button onClick={this.calcularTotalGlobal} className="btn btn-success">Calcular Valor a Pagar</button>
            &emsp; 
            <button type="submit" className="btn btn-success">Submit</button>      
        </form>            
    </div>
    )
  }
}

ProcesarRecoleccion.propTypes = {
    recolecciones: PropTypes.array.isRequired,
    materiales: PropTypes.array.isRequired
  };
  
export default withTracker(() => {
    Meteor.subscribe('recolecciones');
    Meteor.subscribe('misRecolecciones');
    Meteor.subscribe('materiales');
    Meteor.subscribe('empresasPorNombre')
    return{
        recolecciones: Recolecciones.find({}).fetch(),
        materiales: Materiales.find({}).fetch()
    };
    
  })(ProcesarRecoleccion);

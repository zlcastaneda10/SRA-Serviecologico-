import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';


import {Materiales} from '../api/materiales.js';
import {Recolecciones} from '../api/recolecciones.js';
import {Empresas} from '../api/empresas.js';

export class ProcesarRecoleccion extends Component {
    constructor(props){
        super(props);
        this.state={
            precio: 0,
            cantidad: 0
            
        };

        // Aqui van los bind 
        this.handleChange = this.handleChange.bind(this);
        this.calcularTotales = this.calcularTotales.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }

    handleSubmit(event) {

        event.preventDefault();
        this.props.materiales.map((r, i) => {
            let cantidad = document.getElementById(this.props.recoleccion+ "_cantidad"+r.material).value
            let precio = document.getElementById(this.props.recoleccion+ "_precio"+r.material).value
            let total =  document.getElementById(this.props.recoleccion+ "_total"+r.material).value
        
            
                console.log(total);
                Meteor.call('recolecciones.procesar', this.props.recoleccion);
            
        }
        );        
    }

    renderMateriales(){
        return this.props.materiales.map((r,i)=>{
            return([
                
                <div>
                    <h4>{r.material}</h4>
                    <input type = "number"
                            key={this.props.recoleccion+ "_cantidad"+r.material}
                            name = {this.props.recoleccion+ "_cantidad"+r.material}
                            id= {this.props.recoleccion+ "_cantidad"+r.material}
                            ref = {(inp)=> this.inName=inp}
                            placeholder = "cantidad"
                            onChange={this.handleChange}
                            className="form-control"
                    />
                    <input type = "text"
                    key={this.props.recoleccion+ "_precio"+r.material}
                    name = {this.props.recoleccion+ "_precio"+r.material}
                    id= {this.props.recoleccion + "_precio"+r.material}
                    ref = {(inp)=> this.inName=inp}
                    value = {r.precio}
                    onChange={this.handleChange}
                    className="form-control"
                    />
                     
                    <input key={this.props.recoleccion+ "_total"+r.material} className="form-control" type="text" id= {this.props.recoleccion+ "_total"+r.material} disabled />
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
        let cantidad = document.getElementById(this.props.recoleccion+ "_cantidad"+r.material).value
        let precio = document.getElementById(this.props.recoleccion+ "_precio"+r.material).value
        let total = cantidad * precio
        console.log(cantidad*precio)
        let camilo =document.getElementById(this.props.recoleccion+ "_total"+r.material)
        camilo.value = total
        }
        );
      }



  render() {
    return (
        <div className="container">
        <h1>Procesar Recolección</h1>
        <h2>{this.props.empresa}</h2>
           
        <form onSubmit={this.handleSubmit}>
            <h1>Materiales a recolectar</h1>
            <div className="form-group">
                {this.renderMateriales()}
            </div>
            <button onClick={this.calcularTotales} className="btn btn-success">Calcular Totales</button>
            <button type="submit" className="btn btn-success">Submit</button>      
        </form>                    
    </div>
    )
  }
}

ProcesarRecoleccion.propTypes = {
    
    materiales: PropTypes.array.isRequired
  };
  
export default withTracker(() => {
    Meteor.subscribe('materiales');
    return{
        materiales: Materiales.find({}).fetch()
        
    };
    
  })(ProcesarRecoleccion);

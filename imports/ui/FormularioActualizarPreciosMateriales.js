import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import {Materiales} from '../api/materiales.js';

class FormularioActualizarPreciosMateriales extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  renderMateriales(){
    return this.props.materiales.map((r,i)=>{
        return([
        <div className="form-group">
            <label>{r.material}</label>
        <input className="form-control"
                    key={i}
                    name = {r.material}
                    id= {r.material}
                    type="text"
                    ref = {(inp)=> this.inName=inp}
                    placeholder = {r.precio}
                />
        </div>
                ]
        )
    }

    );
  }  

  handleSubmit(event) {
    
    event.preventDefault();
    this.props.materiales.map((r,i)=>{
    let price = document.getElementById(r.material).value
    if(price){
    console.log(price);
    Meteor.call('materiales.update', r.material, price);
    }
    }
    );
  }
  render() {
    console.log(this.props)
  return (
    <div className="container">
            <form onSubmit={this.handleSubmit}>
            <h1>Actualizar Precios de los materiales</h1>
                {this.renderMateriales()}
                <button type="submit" className="btn btn-success">Submit</button>      
            </form>                
    </div>
  )
 }
}

FormularioActualizarPreciosMateriales.propTypes ={
    materiales: PropTypes.array.isRequired
}

export default withTracker(()=>{
    Meteor.subscribe('materiales');
    return{
        materiales: Materiales.find({}).fetch(),
    };
})(FormularioActualizarPreciosMateriales);
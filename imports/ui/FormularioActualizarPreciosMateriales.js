import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

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
        <div class="form-group">
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
    console.log('voy a hacer submit');
    event.preventDefault();
    this.props.materiales.map((r,i)=>{
    let price = document.getElementById(r.material).value
    console.log(price);
    var doc = Materiales.findOne({ material: r.material });
    Materiales.update(
        { _id: doc._id },
        {
            $set: { precio: price}
        }
        );
    }
    );
  }
  render() {
    console.log(this.props)
  return (
    <div className="container">
            <form onSubmit={this.handleSubmit}>
                {this.renderMateriales()}
                <button type="submit" class="btn btn-success">Submit</button>      
            </form>                
    </div>
  )
 }
}

FormularioActualizarPreciosMateriales.propTypes ={
    materiales: PropTypes.array.isRequired
}

export default withTracker(()=>{
    return{
        materiales: Materiales.find({}).fetch(),
    };
})(FormularioActualizarPreciosMateriales);
import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';

import {Empresas} from '../api/empresas.js';
import PropTypes from 'prop-types';


class FormEmpresa extends Component {
    constructor(props){
        super(props);
        this.state={
            NIT: '',
            nomEmpresa:'',
            telefono: '',
            direccion: '',
            nContacto: '',
            cContacto:''

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
        console.log('voy a hacer submit');
        let id;  
        event.preventDefault();
        id = Empresas.insert({
            NIT: this.state.NIT,
            nomEmpresa:this.state.nomEmpresa,
            telefono: this.state.telefono,
            direccion: this.state.direccion,
            nContacto: this.state.nContacto,
            cContacto:this.state.cContacto
        });
        console.log(id);
        
      }


  render() {
    return (
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label>NIT</label>
                    <input className="form-control" type="text" name ="NIT" id="NIT"  value={this.state.NIT} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label>Nombre Empresa</label>
                    <input className="form-control" type="text" name ="nomEmpresa" id="nomEmpresa" value={this.state.nomEmpresa} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label>Telefono</label>
                    <input className="form-control" type="text" name ="telefono" id="telefono" value={this.state.telefono} onChange={this.handleChange} />
                </div>
                <div class="form-group">
                    <label>Dirección</label>
                    <input className="form-control"  type="text" name ="direccion" id="direccion" value={this.state.direccion} onChange={this.handleChange} />
                </div>
                <div class="form-group">
                    <label>Nombre contacto</label>
                    <input className="form-control" type="text" name ="nContacto" id="nContacto" value={this.state.nContacto} onChange={this.handleChange} />
                </div>
                <div class="form-group">
                    <label>Cargo contacto</label>
                    <input className="form-control" type="text" name ="cContacto" id="cContacto" value={this.state.cContacto} onChange={this.handleChange} />
                </div>
                <button type="submit" class="btn btn-success">Submit</button>      
            </form>                
           
                
        </div>
    )
  };
}

FormEmpresa.propTypes ={
    empresas: PropTypes.array.isRequired
}

export default withTracker(()=>{
    return{
        empresas: Empresas.find({}).fetch(),
    };
})(FormEmpresa);


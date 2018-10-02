import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';


import {Recolectores} from '../api/recolectores.js';
import PropTypes from 'prop-types';

class FormRecolectores extends Component {
    constructor(props){
        super(props);
        this.state={
            cedula: '',
            nombre:'',
            telefono: ''

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
        console.log('voy a hacer submit de recolectores');
        let id;  
        event.preventDefault();
        id = Recolectores.insert({
            cedula: this.state.cedula,
            nombre:this.state.nombre,
            telefono: this.state.telefono
        });
        console.log(id);
        
        }


  render() {
    return (
        <div className="container">
        <form onSubmit={this.handleSubmit}>
            <h1>Insertar Recolector</h1>
            <div className="form-group">
                <label>Cedula</label>
                <input className="form-control" type="text" name ="cedula" id="cedula"  value={this.state.cedula} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label>Nombre</label>
                <input className="form-control" type="text" name ="nombre" id="nombre" value={this.state.nombre} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label>Telefono</label>
                <input className="form-control" type="text" name ="telefono" id="telefono" value={this.state.telefono} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>      
        </form>                    
    </div>
    )
  }
}

FormRecolectores.propTypes = {
 
  };
  
  export default withTracker(() => {
     
    return {
      user: Meteor.user()
    };
  })(FormRecolectores);

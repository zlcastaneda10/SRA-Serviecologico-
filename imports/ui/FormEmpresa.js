import React, { Component } from 'react';


export default class FormEmpresa extends Component {
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


    }

    // EventHandlers
    submitForm(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('nomEmpresa'));
        console.log(data);
          
      }


  render() {
    return (
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label>NIT</label>
                    <input className="form-control" type="text" name ="NIT" id="NIT"/>
                </div>
                <div class="form-group">
                    <label>Nombre Empresa</label>
                    <input className="form-control" type="text" name ="nomEmpresa" id="nomEmpresa"/>
                </div>
                <div class="form-group">
                    <label>Telefono</label>
                    <input className="form-control" type="text" name ="telefono" id="telefono"/>
                </div>
                <div class="form-group">
                    <label>Dirección</label>
                    <input className="form-control"  type="text" name ="direccion" id="direccion"/>
                </div>
                <div class="form-group">
                    <label>Nombre contacto</label>
                    <input className="form-control" type="text" name ="nContacto" id="nContacto"/>
                </div>
                <div class="form-group">
                    <label>Cargo contacto</label>
                    <input className="form-control" type="text" name ="cContacto" id="cContacto"/>
                </div>      
            </form>                
            <button type="submit" class="btn btn-primary">Submit</button>
                
        </div>
    )
  };
}

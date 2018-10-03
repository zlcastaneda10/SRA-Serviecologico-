import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import {withTracker} from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.js';

class Navbar extends Component {
  render() {
    if(this.props.user){
      if(this.props.user.profile.rol === 'asesor'){
        return (
          <nav class="navbar navbar-dark bg-dark  fixed-top" >
            <a class="navbar-brand" href="/">
                 <img src="http://www.serviecologico.com/wp-content/uploads/2017/09/Logo.png" width="50" height="25" class="d-inline-block align-top" alt=""/>
                 &emsp;  
                 SRA
             </a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">
                 
                   <a className="nav-item nav-link" href="/registrarEmpresa">Registrar empresa</a>
                   <a className="nav-item nav-link" href="/crearRecoleccion">Crear Recolección</a>
                   <a className="nav-item nav-link" href="/actualizarMateriales">Actualizar Materiales</a>
                   <AccountsUIWrapper/> 
             </div>
             </div>
           </nav>
         )
      }else if(this.props.user.profile.rol === 'recolector'){
        return(
        <nav class="navbar navbar-dark bg-dark  fixed-top" >
        <a class="navbar-brand" href="/">
             <img src="http://www.serviecologico.com/wp-content/uploads/2017/09/Logo.png" width="50" height="25" class="d-inline-block align-top" alt=""/>
             &emsp;  
             SRA
         </a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
             <div className="navbar-nav">
               <a className="nav-item nav-link" href="/verRecolecciones">Ver recolecciones</a>
               <a className="nav-item nav-link" href="/misRecolecciones">Mis recolecciones</a>
               <a className="nav-item nav-link" href="/añadirInformacion">Añadir Información</a>
               <AccountsUIWrapper/> 
         </div>
         </div>
       </nav>
        )
      }

    }else{
      return(
      <nav className="navbar navbar-dark bg-dark  fixed-top" >
        <a className="navbar-brand" href="#">
             <img src="http://www.serviecologico.com/wp-content/uploads/2017/09/Logo.png" width="50" height="25" className="d-inline-block align-top" alt=""/>
             &emsp;  
             SRA        
             &emsp;         
             <AccountsUIWrapper/>  
         </a>
        
       </nav>
      )
    }
  }
}

Navbar.propTypes = {
  user: PropTypes.object
};

export default withTracker(() => {  
  return {
    user: Meteor.user()
  };
})(Navbar);

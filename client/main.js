import React from 'react';
import {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import FormularioActualizarPreciosMateriales from '../imports/ui/FormularioActualizarPreciosMateriales.js';
import FormEmpresa from '../imports/ui/FormEmpresa.js';
import FormularioCrearRecoleccion from '../imports/ui/FormularioCrearRecoleccion';
import FormularioProcesarRecoleccion from '../imports/ui/FormularioProcesarRecoleccion';
import VerRecolectores from '../imports/ui/VerRecolectores';
import App from "../imports/ui/App.js";
import './main.html';
import '../imports/startup/accounts-config.js';




Meteor.startup(()=>{
  render(
    <Router>
    <App>
      <Switch>
        <Route path="/actualizarMateriales" component={FormularioActualizarPreciosMateriales}/>
        <Route path="/RegistrarEmpresa" component={FormEmpresa}/>
        <Route path="/CrearRecoleccion" component={FormularioCrearRecoleccion}/>
        <Route path="/ProcesarRecoleccion" component={FormularioProcesarRecoleccion}/>
        <Route path="/verRecolectores" component={VerRecolectores}/>
      </Switch>
    </App>
  </Router>
  ,document.getElementById('target'));
});


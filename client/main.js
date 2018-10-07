import React from 'react';
import {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import FormularioActualizarPreciosMateriales from '../imports/ui/FormularioActualizarPreciosMateriales.js';
import FormEmpresa from '../imports/ui/FormEmpresa.js';
import FormularioCrearRecoleccion from '../imports/ui/FormularioCrearRecoleccion.js';
import VerRecolecciones from '../imports/ui/VerRecolecciones.js';
import MisRecolecciones from '../imports/ui/MisRecolecciones.js';
import LandingPage from '../imports/ui/LandingPage.js';
import App from "../imports/ui/App.js";
import FormRecolectores from "../imports/ui/FormRecolectores.js";
import ProcesarRecoleccion from "../imports/ui/ProcesarRecoleccion.js";
import VerRecoleccionesTerminadas from "../imports/ui/VerRecoleccionesTerminadas.js";
import './main.html';
import '../imports/startup/accounts-config.js';




Meteor.startup(()=>{
  render(
    <Router>
    <App>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/actualizarMateriales" component={FormularioActualizarPreciosMateriales}/>
        <Route path="/registrarEmpresa" component={FormEmpresa}/>
        <Route path="/crearRecoleccion" component={FormularioCrearRecoleccion}/>
        <Route path="/verRecolecciones" component={VerRecolecciones}/>
        <Route path="/misRecolecciones" component={MisRecolecciones}/>
        <Route path="/añadirInformacion" component={FormRecolectores}/>
        <Route path="/procesarRecoleccion" component={ProcesarRecoleccion}/>
        <Route path="/verRecoleccionesTerminadas" component={VerRecoleccionesTerminadas}/>
      </Switch>
    </App>
  </Router>
  ,document.getElementById('target'));
});


import React from 'react';
import {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import FormularioActualizarPreciosMateriales from '../imports/ui/FormularioActualizarPreciosMateriales.js';
import App from "../imports/ui/App.js";
import './main.html';
import '../imports/startup/accounts-config.js';

Meteor.startup(()=>{
  render(
    <Router>
    <App>
      <Switch>
        <Route path="/actualizarMateriales" component={FormularioActualizarPreciosMateriales}/>
      </Switch>
    </App>
  </Router>
  ,document.getElementById('target'));
});


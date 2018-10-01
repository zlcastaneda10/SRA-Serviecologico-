import React from 'react';
import {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';

import App from "../imports/ui/App.js";
import './main.html';
import '../imports/startup/accounts-config.js';

Meteor.startup(()=>{
  render(<App/>, document.getElementById('target'));
});


import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

import {Materiales} from '../api/materiales.js';

class FormularioActualizarPreciosMateriales extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

  renderMateriales(){
    return this.props.materiales.map((r,i)=>{
        return(<li key={i}
        style={{
            position: 'relative',
            left: `${r.pos}%`
        }}
        >{r.name}</li>)
    }

    );
  }  

  render() {
    console.log(this.props)
  return (
    <div>
      <Form>
         <FormGroup>
             <Label>Materiales</Label>
             {this.renderMateriales()}
         </FormGroup>
      </Form>
      
    </div>
  )
 }
}
App.propTypes ={
    materiales: PropTypes.array.isRequired
}

export default withTracker(()=>{
    return{
        materiales: Materiales.find({}).fetch(),
    };
})(App);
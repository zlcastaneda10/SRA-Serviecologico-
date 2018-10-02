import React, { Component } from 'react';
import {Jumbotron, Button, Container} from 'reactstrap';

export default class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }


  render() {
    return (
      <div> 
        <Jumbotron className="home_header_img">
          <Container >
            <h1 className="display-3 merienda">Asistente de Recolección - Serviecologico S.A.S</h1>
            <p className="lead">Renueva tu guardaropa intercambiando prendas con otros miembros de la comunidad</p>
            <hr className="my-2" />
            <p>¿Que estas esperando? Grandes tesoros aguardan.</p>           
            <p className="lead">
              <Button onClick={()=>{window.location = '/signUp';}} className="nav_btn">Sign Up</Button>
            </p>
          </Container>
        </Jumbotron>
        
      </div>
    );
  }
}
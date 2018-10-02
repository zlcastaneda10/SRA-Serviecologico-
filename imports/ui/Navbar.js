import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
     <nav class="navbar navbar-dark bg-dark  fixed-top" >
       <a class="navbar-brand" href="#">
            <img src="http://www.serviecologico.com/wp-content/uploads/2017/09/Logo.png" width="50" height="25" class="d-inline-block align-top" alt=""/>
            SRA
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Dashboard <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Agregar empresa</a>
            <a class="nav-item nav-link" href="#">Precio materiales</a>
            <a class="nav-item nav-link disabled" href="#">Agregar recolector</a>
        </div>
        </div>
      </nav>
    )
  }
}

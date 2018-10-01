import React, { Component } from 'react';
import { Button,Form, FormGroup, Label, Input,Container,Row } from 'reactstrap';

export default class FormEmpresa extends Component {
    constructor(props){
        super(props);
        this.state={
            empresa:null
        };

        // Aqui van los bind 


    }

    

  render() {
    return (
        <Container>
                <Form>
                    <FormGroup > 
                        <Label>NIT</Label>
                        <Input type="text" name ="NIT" id="NIT"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombre Empresa</Label>
                        <Input type="text" name ="nomEmpresa" id="nomEmpresa"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input type="text" name ="telefono" id="telefono"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Dirección</Label>
                        <Input type="text" name ="direccion" id="direccion"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombre contacto</Label>
                        <Input type="text" name ="nContacto" id="nContacto"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Cargo contacto</Label>
                        <Input type="text" name ="cContacto" id="cContacto"/>
                    </FormGroup>
                    <Button color="success">Enviar</Button>
                </Form>
        </Container>



       
            
        

    //   <form>
    //       <div class="form-group">

    //       </div>

    //   </form>
    )
  };
}

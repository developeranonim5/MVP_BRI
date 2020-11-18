import {React} from 'react';

import { Container, Navbar,Jumbotron}
from 'react-bootstrap';

const Registartion =()=>{
    return (
<>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">BANK BRI</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
  </Navbar.Collapse>
</Navbar>
<Jumbotron fluid className="bg-primary ">
  <Container >
    <h1 className="text-center">Complain Handling</h1>
  </Container>
</Jumbotron>
</>
    )
}

export default Registartion
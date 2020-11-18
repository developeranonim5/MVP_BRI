import {React} from 'react';

import { Navbar, Jumbotron, Container, Card,}
from 'react-bootstrap';

const Home =()=>{  
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

<div className="container">
  <div className="row ">
    <div className="col-sm ">
    <Card   border="primary" style={{ width: '25rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Sign In</button>
      </div>
  </Card>

    </div>
    <div className="col-sm ">
    <Card border="secondary" style={{ width: '25rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Secondary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Sign Up</button>
      </div>
  </Card>
    </div>
  </div>
</div>
</>
    )
}

export default Home
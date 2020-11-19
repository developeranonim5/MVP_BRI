
/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';
import { Navbar, Container,Row, Button, Modal, Col,Form} from 'react-bootstrap';
import Logo from '../images/Logo-BRI.png';
import Profile from '../images/CreateFoto.svg';
import "../css/styles.css";

const DataCustomer =()=>{
    return (
<>
<Container fluid  >
<Navbar className="bg-light justify-content-between">
<Row >
  <col-12>
  <Navbar bg="light" expand="lg" >
  <Navbar.Brand href="#home" ><img className="Image-Logo" src={Logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  </Navbar.Collapse>
</Navbar>
  </col-12>
</Row>
<Button type="submit">Home</Button>
</Navbar>
</Container>

<Modal.Dialog>
  <Modal.Header >
    <Modal.Title>Data Profile</Modal.Title>
  </Modal.Header>
  <Modal.Body>
   
  <Container>
  <Row>

{/* Left */}
    <Col  >
    <img  src={Profile} />
  
    <Container>
  <Row>
      
    <Col sm={6}>
    {/* <Button  variant="secondary">Upload</Button>
    </Col>
    <Col sm={6}>
    <Button  variant="secondary">Browse</Button> */}
    
    </Col>
  </Row>
 
</Container>
    </Col>

    {/* Right */}
    <Col>
    
    
    <Form.Group>

  <Form.Control type="text" placeholder="Full Name" />
  <br />
  <Form.Control type="number" placeholder="ID KTP" />
  <br />
  <Form.Control type="number" placeholder="No Rekening"  />
  <br />
  <Form.Control type="tel" placeholder="Phone Number"  />
  <br />
  <Button  variant="secondary">Save</Button>

</Form.Group>
    </Col>
  </Row>

</Container>

  </Modal.Body>
</Modal.Dialog>


<footer className="page-footer font-small">
  <div className="footer-copyright text-center py-3">© 2020 Copyright by UGM FE BE 05
  </div>
</footer>
</>
    )
}

export default DataCustomer
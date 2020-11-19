/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';
import { Navbar, Jumbotron, Container,Row, Button, Col, Modal, Form} from 'react-bootstrap';
import createComplain from '../images/create-complain.svg';
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";

const CreateComplaint =()=>{
    return (
<>
<Container fluid>
<Navbar className="justify-content-between" style={{backgroundColor: "#FEFFFF"}}>
<Row >
  <col-12>
  <Navbar expand="lg" sticky="top" style={{backgroundColor: "#FEFFFF"}}>
    <Navbar.Brand href="#home" > <img className="d-inline-block align-top ml-5" width="220"
        height="50" src={Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav">  
    </Navbar.Toggle>
    </Navbar>
  </col-12>
</Row>
  <Button type="submit" className="mr-5">Home</Button>
</Navbar>
</Container>

<Jumbotron fluid className="pattern">
  <Container>
  <Row >
    <Col>
    <img className="Image-Signin" src={createComplain}/>
    </Col>

    <Col > 
<Modal.Dialog className="ModalSignup">
  <Modal.Header >
    <Modal.Title >Create New Complaint</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Form>

  <Form.Group controlId="formBasicUsername">
  <Form.Label>Title :</Form.Label>
    <Form.Control type="text" placeholder="Title" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description :</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Enter description..." />
  </Form.Group>

    <Form.Group id="formcheck-api-regular">
      <Form.File.Input />
    </Form.Group> 

  <Button variant="primary" type="submit" className="mr-auto">
    Submit
  </Button>

    </Form>
  </Modal.Body>
    </Modal.Dialog>
    </Col>
  </Row>
  </Container>
</Jumbotron>
<footer className="page-footer font-small">
  <div className="footer-copyright text-center py-3">© 2020 Copyright by UGM FE BE 05
  </div>
</footer>
</>

    )
}

export default CreateComplaint
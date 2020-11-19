/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';
import { Navbar, Jumbotron, Container,Row, Button, Col, Modal, Form} from 'react-bootstrap';
import Signin2 from '../images/signin.svg';
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";

const Login =()=>{
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
<Button type="submit">Sign Up</Button>
</Navbar>
</Container>

<Jumbotron fluid className="Backgroundjumbo2">
  <Container>
  <Row >
    <Col>
    <img className="Image-Signin" src={Signin2}/>
    </Col>

    <Col > 
<Modal.Dialog className="ModalSignup">
  <Modal.Header >
    <Modal.Title >Form Sign In</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Form>

  <Form.Group controlId="formBasicUsername">
    <Form.Control type="username" placeholder="Username" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Sign In
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

export default Login
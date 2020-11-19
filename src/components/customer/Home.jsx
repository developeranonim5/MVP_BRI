/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';
import { Navbar, Jumbotron, Container, Card,Row} from 'react-bootstrap';
import Logo from '../images/Logo-BRI.png';
import Signin from '../images/signin.svg';
import Signup from '../images/signup.svg';
import "../css/styles.css";

const Home =()=>{  
    return (
 
<>
<Container fluid  >
  <Row>
  <Navbar bg="light" expand="lg" >
  <Navbar.Brand href="#home" > <img className="Image-Logo" src={Logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  </Navbar.Collapse>
</Navbar>
  </Row>
</Container>

<Jumbotron fluid className="Backgroundjumbo" style={{backgroundColor: "#20639b"}}>
  <Container >
    <h1 className="text-center Home-h1">Complain Handling</h1>
    <p className="text-center Paraf-p"> We love questions and feedback - and we're alwasys  <br></br>
 happy to help! Here are some ways to connect to us. </p>
  </Container>
</Jumbotron>

<div className="container" >
  <div className="row TwoCardContainer ">
    <div className="col-6 ">
    <Card  border="primary" style={{ width: '25rem' }}>
    <img className="Card-Signin"src={Signin}/>
    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">
   Sign In
        </button>
      </div>
  </Card>
    </div>

    <div className="col-6 ">
    <Card border="secondary" style={{ width: '25rem' }}>
    <img className="Card-Signout"src={Signup}/>
    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Sign Up</button>
      </div>
  </Card>
    </div>
  </div>
</div>

<footer className="page-footer font-small pt-4">
  <div className="footer-copyright text-center py-3">© 2020 Copyright by UGM FE BE 05
  </div>
</footer>

</>

    )
}

export default Home
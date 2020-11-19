import {React} from 'react';
import { Navbar, Jumbotron, Container,Row, Button} from 'react-bootstrap';
import Complain from '../images/create-complain.svg';
import History from '../images/history-complain.svg';
import Logo from '../images/Logo-BRI.png';
import Profcs from '../images/profile.svg';
import "../css/styles.css";

const HomeCustomer =()=>{
    return(
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
<Button type="button">Sign Out</Button>
</Navbar>
</Container>

<Jumbotron fluid className="Backgroundjumbo" style={{backgroundColor: "#20639b"}}>
  <Container >
    <h1 className="text-center Home-h1">Welcome, </h1>
    <p className="text-center Paraf-p"> We love questions and feedback - and we're alwasys  <br></br>
 happy to help! Here are some ways to connect to us. </p>
  </Container>
</Jumbotron>

<div class="card-deck">
  <div class="card">
    <img img button type="button" className="Card-Profcs" src={Profcs}/>
    <div class="card-body">
      <h5 class="card-title">Data Profile</h5>
      </div>
  </div>
  <div class="card">
  <img button type="button" className="Card-Complain" src={Complain}/>
    <div class="card-body">
      <h5 class="card-title">Create Complain</h5>
      </div>
  </div>
  <div class="card">
  <img img button type="button" className="Card-History" src={History}/>
    <div class="card-body">
      <h5 class="card-title">History Complaint</h5>
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

export default HomeCustomer
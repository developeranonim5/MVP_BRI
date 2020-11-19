/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';
import { Navbar, Button, Jumbotron, Container, Row} from 'react-bootstrap';
import Logo from '../images/Logo-BRI.png';
import DataCS from '../images/data-cs.svg';
import AddCS from '../images/add-data-cs.svg';
import His_Comp from '../images/history-complain.svg';
import "../css/styles.css";

const HomeSPV =()=>{  
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
<Button variant="outline-primary">Sign Out</Button>
</Navbar>
</Container>

<Jumbotron fluid className="Backgroundjumbo" style={{backgroundColor: "#20639b"}}>
  <Container >
    <h1 className="text-center Home-h1">Welcome SPV</h1>
    <p className="text-center Paraf-p"> lorem ipsum </p>
  </Container>
</Jumbotron>

<div class="card-deck">
  <div class="card">
    <img img button type="button" className="Card-DataCS"src={DataCS}/>
    <div class="card-body">
      <h5 class="card-title">Data CS</h5>
      </div>
  </div>
  <div class="card">
  <img button type="button" className="Card-AddCS"src={AddCS}/>
    <div class="card-body">
      <h5 class="card-title">Add Data CS</h5>
      </div>
  </div>
  <div class="card">
  <img img button type="button" className="Card-AddCS"src={His_Comp}/>
    <div class="card-body">
      <h5 class="card-title">All Data Complaint</h5>
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

export default HomeSPV

/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';
import { Navbar, Jumbotron, Container, Row, Button, Col, Modal, Form} from 'react-bootstrap';
import Signup2 from '../images/signup.svg';
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";
import history from './../../history';

const Registartion =()=>{
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
  <Button type="submit" className="mr-5">Sign In</Button>
</Navbar>
</Container>

<Jumbotron fluid className="pattern">
</Jumbotron>
<div className="container">
  <div className="row TwoCardContainer">
    <div className="col-xl-4 col-md-5 mt-2 mr-auto">  
    <img className="Image-Signin" src={Signup2}/>   
    </div>
  <div className="col-xl-5 col-md-5 mt-5 mr-4">  
    <div class="card shadow">
    <div class="card-header py-3">
    <h2 class="m-0 font-weight-bold text-dark text-center"><i class="fa fa-pen-alt"></i> Form Sign Up</h2>
    </div>
    <div class="card-body">
      <form class="" action="POST">
        <div class="form-group">
          <label class="">Username :</label>
          <input type="text" class="form-control" placeholder="Username" required/>
        </div>
        <div class="form-group">
          <label class="">Email :</label>
          <input type="email" class="form-control" placeholder="Email" required/>
        </div>
        <div class="form-group">
          <label class="">Password :</label>
          <input type="password" class="form-control" placeholder="Password" required/>
        </div>        
        <div class="form-group ml-auto">
            <button type="submit" id="btnUpload" name="import" class="btn btn-dark btn-block"><i class="fa fa-upload fa-fw"></i>Sign Up</button>
        </div>
      </form>
    </div>
  </div>
  </div> 
  </div>
</div> 
<footer class="sticky-footer bg-white mt-5">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; 2020 by UGM FE BE 05 </span>
          </div>
        </div>
  </footer>
</>
    )
}

export default Registartion
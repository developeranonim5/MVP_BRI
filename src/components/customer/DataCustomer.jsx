
/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';
import { Navbar, Container, Row, Button, Jumbotron} from 'react-bootstrap';
import Logo from '../images/Logo-BRI.png';
import Profile from '../images/40614.jpg';
import "../css/styles.css";

const DataCustomer =()=>{
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
  <Button variant="outline-primary" type="submit" className="mr-5">Home</Button>
</Navbar>
</Container>
<Jumbotron fluid className="pattern"></Jumbotron>
<div className="container">
<div className="row CardProfile">
  <div className="col-xl-8 col-md-5 mt-5">  
    <div class="card shadow ">
    <div class="card-header py-3">
    <h2 class="m-0 font-weight-bold text-dark text-center"><i class="fa fa-pen-alt"></i> Data Profile</h2>
    </div>
    <div class="card-body">
      <form class="" action="POST">
        <div class="row">
        <div class="col-lg-5">
            <div class="mb-3 text-center">
                <img src={Profile} width="150" height="170" class="rounded"/>
            </div>
            <div class="form-group">
          <input type="file" class="form-control" placeholder="Title" required/>
          <small > <i className="Text-Format">* File max size 1 MB, File type .jpg, png, jpeg.</i></small>
        </div>
        </div>
        <div class="col-lg-7">
        <div class="form-group">        
          <input type="text" class="form-control" placeholder="Full name" required/>
        </div>
        <div class="form-group">        
          <input type="password" class="form-control" placeholder="No. HP" required/>
        </div>
        <div class="form-group">      
          <input type="password" class="form-control" placeholder="ID KTP" required/>
        </div>
        <div class="form-group">     
          <input type="password" class="form-control" placeholder="No Rek" required/>
        </div> 
        <div class="form-group mr-auto">
            <button type="submit" id="btnUpload" name="import" class="btn btn-dark btn-block"><i class="fa fa-upload fa-fw"></i>Save</button>
        </div> 
        </div>
        </div>        
        
      </form>
    </div>
  </div>
  </div> 
</div>
</div>
<footer class="sticky-footer bg-white mt-5 footer">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; 2020 by UGM FE BE 05 </span>
          </div>
        </div>
  </footer>  
</>
    )
}

export default DataCustomer
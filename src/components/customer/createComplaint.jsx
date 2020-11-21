/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';
import { Navbar, Jumbotron, Container,Row, Button} from 'react-bootstrap';
import createComplain from '../images/create-complain.svg';
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";

const CreateComplaint =()=>{
    return (
<>
<Container fluid >
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
</Jumbotron>
<div className="container">
  <div className="row TwoCardContainer">
    <div className="col-xl-4 col-md-5 mr-auto mt-5">  
    <img src={createComplain} width="400" height="400"/>   
    </div>
  <div className="col-xl-6 col-md-6 mr-4 mt-2">  
    <div class="card shadow">
    <div class="card-header py-3">
    <h3 class="m-0 font-weight-bold text-dark text-center"><i class="fa fa-pen-alt"></i> Add New Complaint</h3>
    </div>
    <div class="card-body">
      <form class="" action="POST">
        <div class="form-group">
          <label class="">Title :</label>
          <input type="text" class="form-control" placeholder="Title" required/>
        </div>
        <div class="form-group">
          <label class="">Description :</label>
          <textarea type="text" class="form-control" placeholder="Title" required></textarea>
        </div>
        <div class="form-group">
          <label class="">Upload File :</label>
          <input type="file" class="form-control" placeholder="Title" required/>
          <small > <i className="Text-Format">* File max size 1 MB, File type .jpg, png, jpeg.</i></small>
        </div>
        <div class="form-group ml-auto">
            <button type="button" class="btn btn-outline-secondary btn-sm mr-2" data-dismiss="modal"><i class="fa fa-undo fa-fw"></i>Cancel</button>
            <button type="submit" id="btnUpload" name="import" class="btn btn-dark btn-sm "><i class="fa fa-upload fa-fw"></i>Submit</button>
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

export default CreateComplaint
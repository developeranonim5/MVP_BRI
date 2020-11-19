import React, {Component}  from 'react';
import { Navbar,Container, Row, Table, Button, Modal, Col, Form, Badge} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';  
import axios from 'axios';  
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";

const History =()=>{  
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


<Container>
  <Navbar expand="xl" variant="dark" bg="dark" fa-align-justify >
    <Navbar.Brand href="#">History Complaint</Navbar.Brand>
  </Navbar>
</Container>


  <Container >
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>Title</th>
      <th>Description</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <>
          <Button href="#">Detail</Button> 
        </>
      </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#">Detail</Button> 
        </></td>
    </tr>
    
  </tbody>
</Table>
  </Container>



<footer className="page-footer font-small pt-4">
<div className="footer-copyright text-center py-3">© 2020 Copyright by UGM FE BE 05
</div>
</footer>

</>

  )
}

export default History
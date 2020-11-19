import React  from 'react';
import { Navbar,Container,  Row, Table, Button} from 'react-bootstrap';
//import BootstrapTable from 'react-bootstrap-table-next';  
//import axios from 'axios';  
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";

const DataCS =()=>{  
  return (

<>
<Container fluid  >
<Navbar className="bg-light justify-content-between">
<Row >
  <col-12>
  <Navbar bg="light" expand="lg" >
  <Navbar.Brand href="#" ><img className="Image-Logo" src={Logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  </Navbar.Collapse>
</Navbar>
  </col-12>
</Row>
<Button href="#HomeSPV.jsx"variant="outline-primary">Home</Button>
</Navbar>
</Container>
<br/>
    
<p className="text-center Home-h1" style={{color:'#20639b'}}>Data Customer Service</p>
  <Container >
    <Table class="table" bordered hover>
        
    <thead>
        <tr>
        <th>ID CS</th>
        <th>Full Name</th>
        <th>CS Name</th>
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
          <Button href="#" variant="outline-warning">Detail</Button> 
        </>
      </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#" variant="outline-warning">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#" variant="outline-warning">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#" variant="outline-warning">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#" variant="outline-warning">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#" variant="outline-warning">Detail</Button> 
        </></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><>
          <Button href="#"variant="outline-warning">Detail</Button> 
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

export default DataCS
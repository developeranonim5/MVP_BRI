import React from 'react';
import Home from './components/customer/Home';
import Login from './components/customer/Login';
import Registration from './components/customer/Registration';
import DataCustomer from './components/customer/DataCustomer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
  <Home></Home>
  <Registration></Registration>
  <Login></Login>
  <DataCustomer></DataCustomer>
    </div>
  );
}

export default App;

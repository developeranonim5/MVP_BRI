import React from 'react';
import Home from './components/customer/Home';
import Login from './components/customer/Login';
import Registration from './components/customer/Registration';
import DataCustomer from './components/customer/DataCustomer';
import HistoryComplain from './components/customer/HistoryComplain';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
  <Home></Home>
  <Registration></Registration>
  <Login></Login>
  <DataCustomer></DataCustomer>
  <HistoryComplain></HistoryComplain>
    </div>
  );
}

export default App;

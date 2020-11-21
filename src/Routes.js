import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

//  Data Customer

import Login from "./components/customer/Login";
import Home from "./components/customer/Home";
// import DataCustomer from "./components/customer/DataCustomer";
// import HistoryComplain from "./components/customer/HistoryComplain";
import Registration from "./components/customer/Registration";

// Routing
import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                   <Route path="/" exact component={Home} />
                    <Route path="/Home"  component={Home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Registration " component={Registration} />
                    {/* <Route path="/DataCustomer" component={DataCustomer} />
                    <Route path="/HistoryComplain" component={HistoryComplain} /> */}
                  
                </Switch>
            </Router>
        )
    }
}
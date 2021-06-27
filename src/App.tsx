import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./layout/Navigation";
import PatientsModule from "./patients/PatientsModule";
import DoctorsModule from './doctors/DoctorsModule';
import AppointmentsModule from './appointments/AppointmentsModule' ;


function App() {
  
  return (
    <Router>
      <Navigation />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/">
            Home page
          </Route>
          <Route path="/patients" component={PatientsModule} />          
          <Route path="/doctors" component={DoctorsModule} />
          <Route path="/appointments" component={AppointmentsModule} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;


//npm install @material-ui/core
//npm install formik
//npm add -D @types/material-ui
//<link rel="styleshit" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
//Icons: install @material-ui/icon
import React from "react";
import {Switch, Route, RouteComponentProps} from "react-router-dom";
import PatientListRoute from "./PatientListRoute";
import PatientDetailsRoute from "./PatientDetailsRoute";
import { PatientForm } from "./components/PatientForm";

const PatientsModule: React.FC<RouteComponentProps> = ({match}) => {
    return (
        <Switch>
            <Route path={match.url} exact component={PatientListRoute}/>
            <Route path={match.url + "/:id"} component={PatientDetailsRoute}/> 
            <Route path={match.url} exact component={PatientForm} />    
        </Switch>
    )
}

export default PatientsModule;

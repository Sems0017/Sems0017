import React from "react";
import { Switch, RouteComponentProps, Route } from "react-router-dom";
import AppointmentListRoute from "./AppoinmentListRoute";
import AppointmentDetailsRoute from "./AppointmentDetailsRoute";


const AppointmentsModule: React.FC<RouteComponentProps>  = ({match}) => {

    return (
        
        <Switch>            
            <Route path= {match.url} exact component={AppointmentListRoute}/>  
            <Route path={match.url + "/:id"} component={AppointmentDetailsRoute}/>                     
        </Switch>     
       
    );
}

export default AppointmentsModule;


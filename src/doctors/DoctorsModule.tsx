import React from "react";
import { Switch, RouteComponentProps, Route } from "react-router-dom";
import DoctorListRoute from "./DoctorListRoute";
import DoctorDetailsRoute from "./DoctorDetailsRoute";

const DoctorsModule: React.FC<RouteComponentProps> = ({match}) => {

    return (
        <Switch>
            
            <Route path= {match.url} exact component={DoctorListRoute}/>
            <Route path= {match.url + "/:id"} exact component={DoctorDetailsRoute}/>
            
        </Switch>
    );

}

export default DoctorsModule;
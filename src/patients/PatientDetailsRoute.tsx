import React from "react";
import {RouteComponentProps} from "react-router-dom";

interface PatientDetailsRouteParams {
    id: string;  
    name: string; 
}

const PatientDetailsRoute: React.FC<RouteComponentProps<PatientDetailsRouteParams>> = ({match}) => {
    return (
        <div>Placeholder for rendering patient with  id {match.params.id}</div>
    )
}

export default PatientDetailsRoute;

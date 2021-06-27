import React from "react";
import { RouteComponentProps } from "react-router-dom";

export interface DoctorDetailsRouteParam {
    id: string;
    name: string;
}

const DoctorDetailsRoute: React.FC<RouteComponentProps<DoctorDetailsRouteParam>> = ({match}) => {
    return <div>Placeholder for rendering doctor with  id {match.params.id}</div>;
}

export default DoctorDetailsRoute;
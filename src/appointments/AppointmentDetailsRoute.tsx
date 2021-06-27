import React from "react";
import { RouteComponentProps } from "react-router-dom";

export interface AppointmentDetailsRouteParam {
    id: string;
    startsAt: string;
    startPeriod: string;
    endPeriod: string;
}

const AppointmentDetailsRoute: React.FC<RouteComponentProps<AppointmentDetailsRouteParam>> = ({match}) => {
    return <div>Placeholder for rendering doctor with  id {match.params.id}</div>;
}

export default AppointmentDetailsRoute;
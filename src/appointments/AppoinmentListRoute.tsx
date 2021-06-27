import React, {useEffect, useState} from "react";
import AppointmentList from "./AppointmentList";
import { list } from "./api";
import {useHistory} from "react-router-dom";
import { Appointment } from "./appointment";

const AppointmentListRoute: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>();
    const history = useHistory();

    useEffect(() => {
        setAppointments(list());
    }, []);

    function onEdit(apointment: Appointment) {
        history.push(`/appointments/${apointment.id}`);
    }
   
    return appointments ? <AppointmentList appointments={appointments} onEdit={onEdit}/> : null;
}

export default AppointmentListRoute;


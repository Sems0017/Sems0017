import appointments from "./appointments.json"
import { Appointment } from "./appointment";


let appointmentRows: Appointment [] = appointments.map(appointment => ({...appointment, startsAt: new Date(appointment.startsAt), startPeriod: new Date(appointment.startPeriod), endPeriod: new Date(appointment.endPeriod)})); 


export function list() {
    return appointmentRows;
} 
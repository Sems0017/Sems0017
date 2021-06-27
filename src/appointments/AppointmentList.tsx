import { ButtonGroup } from "@material-ui/core";
import { Button, Table } from "react-bootstrap";
import { Calendar3, Pencil } from "react-bootstrap-icons";
import { Appointment } from "./appointment";



export interface AppointmentListProps {
    appointments: Appointment[];
    onEdit?: (appointment: Appointment) => void;
}

const AppointmentList: React.FC<AppointmentListProps> =  ({appointments, onEdit= () => {} })  => {

    return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Start at</th>
                            <th>Start period date</th>
                            <th>End period date</th>
                            <th>&nbsp;</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {appointments.map(appointment => (<tr>
                                                    <td>{appointment.startsAt}</td>
                                                    <td>{appointment.startPeriod}</td>
                                                    <td>{appointment.endPeriod}</td>
                                                    <td>
                                                        <ButtonGroup>
                                                            <Button variant="primary" onClick={ () => {onEdit(appointment);}}>
                                                               <Pencil />
                                                            </Button>                                                            
                                                            <Button variant="primary">
                                                                <Calendar3/>
                                                            </Button>                                                            
                                                        </ButtonGroup>
                                                    </td>
                                                </tr>)
                                    )
                        }
                    </tbody>
                </Table>
            </div>
    );
}

export default AppointmentList;
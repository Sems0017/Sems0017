import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {Patient} from "./patient";
import {Pencil, Calendar3} from "react-bootstrap-icons";

export interface PatientListProps {
    patients: Patient[];
    onEdit?: (patient: Patient) => void;
    onBookAppointment?: (patient: Patient) => void;
}

const PatientList: React.FC<PatientListProps> = ({ patients, onEdit = () => {} }) => {
    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Cpr number</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                {patients.map(patient => (
                    <tr>
                        <td>{patient.name}</td>
                        <td>{patient.cprNumber}</td>
                        <td>
                            <ButtonGroup>
                                <Button variant="primary" onClick={ () => { onEdit(patient); }}>
                                    <Pencil/>
                                </Button>
                                <Button variant="primary">
                                    <Calendar3/>
                                </Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default PatientList;

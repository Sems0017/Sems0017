import React from "react";
import { Table } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Doctor } from "./doctor";
import { Pencil, Calendar3} from "react-bootstrap-icons";


export interface DoctorListProps {
    doctors: Doctor[];
    onEdit?: (doctor: Doctor) => void;
}

const DoctorList: React.FC<DoctorListProps> =  ({doctors, onEdit= () => {} })  => {

    return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Specialization</th>
                            <th>&nbsp;</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {doctors.map(doctor => (<tr>
                                                    <td>{doctor.name}</td>
                                                    <td>{doctor.specialization}</td>
                                                    <td>
                                                        <ButtonGroup>
                                                            <Button variant="primary" onClick={ () => {onEdit(doctor);}}>
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

export default DoctorList;
import React, {useEffect, useState} from "react";
import PatientList from "./PatientList";
import {list} from "./api";
import {Patient} from "./patient";
import {useHistory} from "react-router-dom";

const PatientListRoute: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>();
    const history = useHistory();

    useEffect(() => {
        setPatients(list());
    }, []);

    function onEdit(patient: Patient) {
        history.push(`/patients/${patient.id}`);
    }

    return patients ? <PatientList patients={patients} onEdit={onEdit}/> : null;
}

export default PatientListRoute;

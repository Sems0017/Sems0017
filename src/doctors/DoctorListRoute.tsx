import React, { useEffect, useState } from "react"
import { list } from "./api";
import { Doctor } from "./doctor";
import {useHistory} from "react-router-dom";
import DoctorList from "./DoctorList";

const DoctorListRoute: React.FC = () => {
    const [doctors, setDoctors] = useState<Doctor[]>();
    const history = useHistory();
   
    useEffect(() => {
        setDoctors(list())
    }, []);

    function onEdit(doctor: Doctor){
        history.push(`/doctors/${doctor.id}`);
    }

    return doctors ? <DoctorList doctors={doctors} onEdit={onEdit}/> : null;
}

export default DoctorListRoute;
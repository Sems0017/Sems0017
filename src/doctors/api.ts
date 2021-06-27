import doctors from "./doctors.json";
import {Doctor} from "./doctor";
import { Specialization } from "./Specialization";

let doctorRows: Doctor[] = doctors.map(doctor => ({...doctor, specialization: Specialization.ORTHOPEDICIAN}));

export function list() {
    return doctorRows;
} 

export function save(doctor: Doctor) {

}

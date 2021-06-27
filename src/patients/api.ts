import patients from "./patients.json";
import {Patient} from "./patient";

let patientRows: Patient[] = patients.map(patient => ({...patient, birthday: new Date(patient.birthday)}));

export function list() {
    return patientRows;
}

export function save(patient: Patient) {

}
import { Component } from "react";
import { PatientForm } from "./components/PatientForm";

class PatientFormCreate extends Component {
    
    render() {
        return (
        <div className="PatientFormCreate">
            <p> I am here </p>
            <PatientForm onSubmit={() => {}}/>
        </div>
            
        )
    }
}
export default PatientFormCreate;
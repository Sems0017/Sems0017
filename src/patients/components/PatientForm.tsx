import { Button } from '@material-ui/core';
import { Form, Formik, Field } from 'formik'; //problems with dependency for -formic-. Must be installed properly !
import * as React from 'react';
import { Patient } from '../patient';
import { PatientFileld } from './PatientField';


interface Props {
    onSubmit: (values: Patient) => void;
}

export const PatientForm: React.FC<Props> = ({onSubmit}) => {
    return (
        <Formik 
            initialValues={{ id: 0, number: "",  name: "", cprNumber: "", birthday: new Date()}} 
            onSubmit={(values) => {
                onSubmit(values);
            }}
        >
            {({values}) => (
                <Form>
                    <div>
                        <Field
                            name="id"
                            placeholder="id"                             
                            component={PatientFileld}
                            label="Id number"
                        />
                    </div>
                    <div>
                        <Field 
                            name="name"
                            placeholder="name"                             
                            component={PatientFileld}
                            label="Name"
                        />
                    </div>
                    <div>
                        <Field 
                            name="cpr number"
                            placeholder="cpr number"                             
                            component={PatientFileld}
                            label="Cpr number"
                        />
                    </div>
                    <div>   
                        <Field 
                            name="birthday" 
                            placeholder="birthday"                            
                            component={PatientFileld}
                            label="Birthday"
                        />
                    </div>
                    <Button type="submit"> Create Patient </Button>

                        <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>)}
        </Formik>
    )
}
import React from 'react';
import {FieldProps} from "formik";
import { TextField } from '@material-ui/core';
import {TextFieldProps} from  '@material-ui/core/TextField/TextField';


//problems with dependency for -formic-. Must be properly installed!  
export const PatientFileld: React.FC<FieldProps & TextFieldProps> =({ 
    placeholder, 
    field
}) => {
    return (
        <TextField 
            placeholder={placeholder}
            {...field}
        />
    );
}
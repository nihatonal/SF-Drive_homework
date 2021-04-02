import React from "react";
import Form from "./Form";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import Header from "../Header";
import Error from "./Error";

function FormVanilla({ initialValues, validate }) {
  const [values, setValues] = React.useState(initialValues);

  const [errors, setErrors] = React.useState({});

  const [touched, setTouched] = React.useState({});

  let history = useHistory();


  // change event handler
  const handleChange = evt => {
    const { name, value: newValue, type } = evt.target;

   
    const value = type === "number" ? +newValue : newValue;
    //const value = type === "password" ? newValue : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value
    });

    // was the field modified
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;

    // remove whatever error was there previously
    const { [name]: removedError, ...rest } = errors;

    // check for a new error
    const error = validate[name](value);

    // // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error })
    });
  };
  // form submit handler
  const  handleSubmit  = evt => {
    evt.preventDefault();
    
    // validate the form
    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError })
          },
          touched: {
            ...acc.touched,
            ...newTouched
          }
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched }
      }
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    const registered = {
        userName: values.userName,
        birthdayDate: values.birthdayDate,
        email: values.email,
        phone: values.phone,
        passport: values.passport,
        datepassport: values.datepassport,
        issued: values.issued,
        code: values.code,
        license: values.license,
        licenseDate: values.licenseDate,
        password: values.password
    };
   

    
    if (
      !Object.values(formValidation.errors).length && // errors object is empty
      Object.values(formValidation.touched).length ===
        Object.values(values).length && // all fields were touched
      Object.values(formValidation.touched).every(t => t === true) // every touched field is true
    ) {

    return axios.post('http://localhost:4000/app/signup', registered)
        .then(response => {
          console.log(response.data)
          
          setTimeout(() => {
            
            history.push("../StepTwo/StepTwo")
            }, 1000);
          
        })

           
    }
    
  };

  
  return (
    <>
      {/* <Error /> */}
      <Form
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        values={values}
      />
      {/* <Debug values={values} errors={errors} touched={touched} /> */}
    </>
  );
}

// export default FormVanilla;
export default FormVanilla;

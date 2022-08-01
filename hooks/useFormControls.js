import { useState } from "react";
import Swal from 'sweetalert2'

const initialFormValues = {
  fullName: "",
  email: "",
  message: "",
  formSubmitted: false,
  success: false
}

export const useFormControls = () => {
  // We'll update "values" as the form updates
  const [values, setValues] = useState(initialFormValues);
  // "errors" is used to check the form for errors
  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors }

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required."

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required."
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid."
    }

    if ("message" in fieldValues)
      temp.message =
        fieldValues.message ? "" : "This field is required."

    setErrors({
      ...temp
    });
  }
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formIsValid()) {

      let data = {
        fullname: values.fullName,
        email: values.email,
        message: values.message
      }

      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        setIsLoading(true);
        setTimeout(() => {
          if (res.status === 200) {
            Swal.fire({
              title: '¡Mensaje enviado!',
              text: '¡Muchas gracias por escribirnos!',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            })
            setIsLoading(false);
          }
        }, 2000);
      })
    }
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
    isLoading
  };
}
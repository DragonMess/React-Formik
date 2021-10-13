import React from "react";
import "./Formulaire.css";
import { MyTextInput } from "./MyTextInput";

import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

export const Formulaire = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 chars or less")
      .required("Required !"),
    lastName: Yup.string()
      .max(15, "Must be 15 chars or less")
      .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="form">
        <MyTextInput
          className="input"
          label="first Name"
          name="firstName"
          type="text"
          placeholder="Your first name"
        />
        <MyTextInput
          className="input"
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Your last name"
        />
        <MyTextInput
          className="input"
          label="email"
          name="email"
          type="email"
          placeholder="Your email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

import React from "react";
import { useFormik } from "formik";

import authValidationSchema from "./authValidationSchema";
import "../Form.css";

const SingIn = () => {
  const formik = useFormik({
    initialValues: {
     
      email: "",
      password: "",
     
    },
    validationSchema: authValidationSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const displayErr = (touched, error) => {
    return touched && error ? "error" : "";
  };

  return (
    <form onSubmit={formik.handleSubmit} className="ui form raised segment container">
     
      
      <div
        className={`field ${displayErr(
          formik.touched.email,
          formik.errors.email
        )}`}
      >
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error-msg">{formik.errors.email}</div>
        ) : null}
      </div>
      <div
        className={`field ${displayErr(
          formik.touched.password,
          formik.errors.password
        )}`}
      >
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error-msg">{formik.errors.password}</div>
        ) : null}
      </div>
      
      <button type="submit" className="ui button primary">
        Login
      </button>
    </form>
  );
};

export default SingIn;

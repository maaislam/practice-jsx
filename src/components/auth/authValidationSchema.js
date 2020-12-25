import * as Yup from "yup";

const authValidationSchema = Yup.object({
  firstName: Yup.string()

    .max(15, "Must be 15 characters or less")

    .required("Required"),
  displayName: Yup.string()
    .max(15, "Must be 15 characters or less")

    .required("Required"),

  lastName: Yup.string()

    .max(20, "Must be 20 characters or less")

    .required("Required"),

  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Must provide password"),
  passwordCheck: Yup.string()
    .required("Must match password")
    .oneOf([Yup.ref("password"), null], "Must match password"),
});

export default authValidationSchema;

import * as Yup from "yup";

export const RegisterValidationSchema = Yup.object().shape({
  confirmPassword: Yup.string()
    .min(6)
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  firstName: Yup.string().trim().required("Required"),
  lastName: Yup.string().trim().required("Required"),
  password: Yup.string().min(6).required("Required"),
  privacyChecked: Yup.boolean()
    .oneOf([true], "You must accept the privacy policy")
    .required("Required"),
});

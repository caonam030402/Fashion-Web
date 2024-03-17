import * as yup from "yup";

export const authSchema = yup.object({
  email: yup
    .string()
    .email("Email must be a valid email")
    .min(10, "Email must be at least 10 characters long")
    .max(50, "Email must be at most 50 characters long")
    .required("Email is required"),
  name: yup
    .string()
    .min(6, "Name must be at least 6 characters long")
    .max(20, "Name must be at most 20 characters long")
    .required("Name is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be at most 20 characters long")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export type AuthSchema = yup.InferType<typeof authSchema>;

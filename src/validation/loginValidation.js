import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
});


import * as Yup from "yup";
export const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Your Name is too Short")
    .max(50, "Your Name is too long!")
    .required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  
});

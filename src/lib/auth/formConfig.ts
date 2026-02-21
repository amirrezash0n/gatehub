import { loginSchema, registerSchema } from "../validators/auth.validator";

export const loginFields = [
  {
    name: "username",
    label: "Username",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
];

export const registerFields = [
  {
    name: "username",
    label: "Username",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

export { loginSchema, registerSchema };

import { z, ZodType } from "zod";

const UserSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters" })
    .max(30),

  email: z.string().email({ message: "Invalid email address" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, {
      message: "Password must contain at least 1 number and 1 special symbol",
    }),

  phone: z.string().regex(/^\+\d{1,3}\s\d{3}-\d{3}-\d{4}$/, {
    message: "Phone must be in format +X XXX-XXX-XXXX",
  }),

  website: z.string().url({ message: "Invalid URL" }),

  birthDate: z.string().refine(
    (val) => {
      const age = new Date().getFullYear() - new Date(val).getFullYear();
      return age >= 18;
    },
    { message: "You must be 18 or older" }
  ),

  experience: z.number().min(0).max(20),

  skills: z.array(z.string()).min(2, { message: "Select at least 2 skills" }),

  subscription: z.enum(["Free", "Pro", "Enterprise"]),

  companySize: z.string().optional(),

  country: z.string().min(1, { message: "Country is required" }),
});

const skillsOptions = ["JavaScript", "React", "Node", "TypeScript", "CSS"];
const formData = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  website: "",
  birthDate: "",
  experience: 0,
  skills: [],
  companySize: "",
  country: "",
};
const formFieldProps = {
  type: "",
  placeholder: "",
  name: "",
  register: () => {},
  error: undefined,
  valueAsNumber: false,
};
const validFieldNames = [
  "fullName",
  "email",
  "password",
  "phone",
  "website",
  "birthDate",
  "experience",
  "skills",
  "companySize",
  "country",
];

export { formData, formFieldProps, validFieldNames, UserSchema, skillsOptions };

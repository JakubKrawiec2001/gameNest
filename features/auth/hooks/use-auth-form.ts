import { formOptions } from "@tanstack/react-form";
import z from "zod";
import { useAppForm } from "@/lib/hooks/use-app-form";

const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
const signUpSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Confirm Password must be at least 6 characters"),
});

export const signInFormOptions = formOptions({
  defaultValues: {
    email: "",
    password: "",
  },
  validators: {
    onSubmit: signInSchema,
  },
});

export const signUpFormOptions = formOptions({
  defaultValues: {
    email: "",
    password: "",
    confirmPassword: "",
  },
  validators: {
    onSubmit: signUpSchema,
  },
});

export const useAuthForm = () => {
  const signInForm = useAppForm({
    ...signInFormOptions,
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  const signUpForm = useAppForm({
    ...signUpFormOptions,
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return { signInForm, signUpForm };
};

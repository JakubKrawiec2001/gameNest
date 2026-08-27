import { formOptions } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import z from "zod";
import { useAppForm } from "@/lib/hooks/use-app-form";
import { createClient } from "@/lib/supabase/client";
import { authErrorsHandler } from "../utils/auth-errors-handler";

const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
const signUpSchema = z
  .object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
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
  const supabase = createClient();
  const router = useRouter();

  const signInForm = useAppForm({
    ...signInFormOptions,
    onSubmit: async ({ value }) => {
      const { error } = await supabase.auth.signInWithPassword({
        email: value.email,
        password: value.password,
      });
      if (error) {
        toast.error(authErrorsHandler(error.code));
        return;
      }
      toast.success("Signed in successfully");
      router.push("/");
      router.refresh();
    },
  });

  const signUpForm = useAppForm({
    ...signUpFormOptions,
    onSubmit: async ({ value }) => {
      const { error } = await supabase.auth.signUp({
        email: value.email,
        password: value.password,
      });
      if (error) {
        toast.error(authErrorsHandler(error.code));
        return;
      }
      toast.success("Account created successfully");
      router.push("/sign-in");
      router.refresh();
    },
  });

  return { signInForm, signUpForm };
};

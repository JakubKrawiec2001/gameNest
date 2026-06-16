"use client";

import Link from "next/link";
import { Button } from "@/components/button";
import { useAuthForm } from "../hooks/use-auth-form";

export const SignUpPage = () => {
  const { signUpForm: form } = useAuthForm();

  return (
    <div className="bg-white p-6 rounded-lg w-full max-w-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <form.AppField name="email">
          {(field) => <field.Input label="Email" />}
        </form.AppField>
        <form.AppField name="password">
          {(field) => <field.Input label="Password" type="password" />}
        </form.AppField>
        <form.AppField name="confirmPassword">
          {(field) => <field.Input label="Confirm Password" type="password" />}
        </form.AppField>
        <Button type="submit">Sign Up</Button>
      </form>
      <p>
        Masz już konto? <Link href="/sign-in">Zaloguj się</Link>
      </p>
    </div>
  );
};

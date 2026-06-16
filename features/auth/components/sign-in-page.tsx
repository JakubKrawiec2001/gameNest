"use client";

import Link from "next/link";
import { Button } from "@/components/button";
import { useAuthForm } from "../hooks/use-auth-form";

export const SignInPage = () => {
  const { signInForm: form } = useAuthForm();

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
        <Button type="submit">Sign In</Button>
      </form>
      <p>
        Nie masz konta? <Link href="/sign-up">Zarejestruj się</Link>
      </p>
    </div>
  );
};

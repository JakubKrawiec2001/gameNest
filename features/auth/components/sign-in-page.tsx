"use client";

import Link from "next/link";
import { Button } from "@/components/button";
import { useAuthForm } from "../hooks/use-auth-form";

export const SignInPage = () => {
  const { signInForm: form } = useAuthForm();

  return (
    <div className="bg-card border border-border p-6 rounded-lg w-full max-w-md">
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
        Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
      </p>
    </div>
  );
};

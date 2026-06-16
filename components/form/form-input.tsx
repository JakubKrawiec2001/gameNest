"use client";

import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useFieldContext } from "@/lib/hooks/use-app-form";
import { cn } from "@/lib/utils";
import { Field, FieldError } from "../ui/field";

type FormInputProps = React.ComponentProps<"input"> & {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
};

export const FormInput = ({
  className,
  type,
  label,
  labelClassName,
  inputClassName,
  ...props
}: FormInputProps) => {
  const field = useFieldContext<string>();
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field className="gap-2" data-invalid={isInvalid}>
      <Label htmlFor={field.name} className={cn("", labelClassName)}>
        {label}
      </Label>
      <Input
        type={type}
        className={cn("min-h-12 p-4", inputClassName)}
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={isInvalid}
        {...props}
      />
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
};

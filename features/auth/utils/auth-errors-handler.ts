import type { AuthErrorCodesType } from "../types/auth-error-codes";

type ErrorMessageBuilderType = {
  errorCode: AuthErrorCodesType;
};

const errorMessageBuilder = ({ errorCode }: ErrorMessageBuilderType) => {
  switch (errorCode) {
    case "invalid_credentials":
      return "Invalid credentials";
    case "email_not_confirmed":
      return "Email not confirmed";
    case "user_already_exists":
      return "User already exists";
    case "email_exists":
      return "Email already exists";
    case "email_address_invalid":
      return "Email address is invalid";
    case "email_address_not_authorized":
      return "Email address is not authorized";
    case "unexpected_failure":
      return "An unexpected error occurred";
    default:
      return "An unknown error occurred";
  }
};

export const authErrorsHandler = (errorCode: AuthErrorCodesType) => {
  if (!errorCode) {
    return "An unknown error occurred";
  }
  let errorMessage = "";
  errorMessage = errorMessageBuilder({ errorCode });

  return errorMessage;
};

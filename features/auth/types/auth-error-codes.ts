type ErrorCodesType =
  | "invalid_credentials"
  | "email_not_confirmed"
  | "user_already_exists"
  | "email_exists"
  | "email_address_invalid"
  | "email_address_not_authorized"
  | "unexpected_failure";

export type AuthErrorCodesType = ErrorCodesType | (string & {}) | undefined;

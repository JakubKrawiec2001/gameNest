type IgdbApiErrorOptions = ErrorOptions & {
  status?: number;
};

export class IgdbApiError extends Error {
  readonly status?: number;

  constructor(message: string, options?: IgdbApiErrorOptions) {
    super(message, options);
    this.name = "IgdbApiError";
    this.status = options?.status;
  }
}

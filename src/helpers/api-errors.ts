export class ApiError extends Error {
  constructor(
    public msg: string,
    public statusCode: number
  ) {
    super(msg);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}

export class DuplicatedError extends ApiError {
  constructor(message: string) {
    super(message, 409);
  }
}

export class ValidationError extends ApiError {
  constructor(message: string) {
    super(message, 422);
  }
}

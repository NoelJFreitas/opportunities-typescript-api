/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiError } from "@src/helpers/api-errors";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const code = err.statusCode ?? 500;
  const message = err.statusCode ? err.message : "Internal Server Error";
  res.status(code).send({ code, message });
};

import { BadRequestError } from "@src/helpers/api-errors";
import { RequestHandler } from "express";
import { AnySchema, ValidationError } from "yup";

const validate =
  (schema: AnySchema): RequestHandler =>
  async (req, res, next) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      const yupError = error as ValidationError;
      console.log(yupError.errors);
      throw new BadRequestError(yupError.message);
    }
  };

export default validate;

// import { Company } from "@src/models/company";
import { NextFunction, Request, Response } from "express";

export default class CompaniesController {
  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.status(201).send({ code: 201, error: "criado" });
    } catch (err) {
      next(err);
    }
  }
}

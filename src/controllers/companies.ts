import { Company } from "@src/models/company";
import { Request, Response } from "express";

export default class CompaniesController {
  public async create(req: Request, res: Response): Promise<void> {
    const company = await new Company(req.body).save();
    res.status(201).send(company);
  }
}

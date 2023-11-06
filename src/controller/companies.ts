import { Request, Response } from "express";

export default class CompaniesController {
  public create(req: Request, res: Response): void {
    console.info("chamou");
    res.status(201).send({ ...req.body, ...{ id: "some-id" } });
    return;
  }
}

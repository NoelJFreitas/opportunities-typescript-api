import CompaniesController from "@src/controllers/companies";
import createCompany from "@src/dto/createCompany";
import validate from "@src/middlewares/validateRequest";
import { Router } from "express";

const companiesRoutes = Router();
const companiesController = new CompaniesController();

companiesRoutes.post(
  "/company",
  validate(createCompany),
  companiesController.create
);

export default companiesRoutes;

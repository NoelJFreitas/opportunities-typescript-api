import CompaniesController from "@src/controllers/companies";
import { Router } from "express";

const companiesRoutes = Router();
const companiesController = new CompaniesController();

companiesRoutes.post("/company", companiesController.create);

export default companiesRoutes;

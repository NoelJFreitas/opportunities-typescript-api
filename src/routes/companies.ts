import CompaniesController from "@src/controller/companies";
import { Router } from "express";

const companiesRoutes = Router();
// const companiesController = new CompaniesController();

companiesRoutes.post("/", new CompaniesController.create());

export default companiesRoutes;

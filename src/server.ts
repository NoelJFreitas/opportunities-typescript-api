import "./util/module-alias";
import "express-async-errors";

import express, { Application } from "express";

import routes from "@src/routes";
import * as database from "@src/database";
import { errorHandler } from "./middlewares/error";

export default class SetupExpress {
  private app = express();
  constructor(private readonly port = 3000) {}

  private setupExpress(): void {
    this.app.use(express.json());
    this.app.use(routes);
    this.app.use(errorHandler);
  }

  private async databaseSetup(): Promise<void> {
    await database.connect();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    await this.databaseSetup();
  }

  public start(): void {
    this.app.listen(this.port, () => console.info(`listening on ${this.port}`));
  }

  public async close(): Promise<void> {
    await database.close();
  }

  public getApp(): Application {
    return this.app;
  }
}

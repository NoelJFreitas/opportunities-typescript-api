import "./util/module-alias";
import express, { Application } from "express";
import routes from "@src/routes";
import * as database from "@src/database";

export default class SetupExpress {
  private app = express();
  constructor(private readonly port = 3000) {}

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupControllers(): void {
    this.app.use(routes);
  }

  private async databaseSetup(): Promise<void> {
    await database.connect();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();
    await this.databaseSetup();
  }

  public start(): void {
    this.app.listen(this.port, () => console.info(`listening on ${this.port}`));
  }

  public getApp(): Application {
    return this.app;
  }
}

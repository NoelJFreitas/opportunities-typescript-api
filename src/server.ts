import express, { json } from "express";

export default class SetupServer {
  private app = express();
  constructor(private port = 3000) {}

  public setupServer(): void {
    this.app.use(json);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.info(`Server started on port ${this.port}`);
    });
  }
}

import express from "express";

export default class SetupExpress {
  private static app = express();
  constructor(private readonly port = 3000) {}

  private setupExpress(): void {
    SetupExpress.app.use(express.json());
  }

  private setupControllers(): void {
    SetupExpress.app.get("/", (_, res) => res.send("teste"));
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  public start(): void {
    SetupExpress.app.listen(this.port, () =>
      console.info(`listening on ${this.port}`)
    );
  }
}

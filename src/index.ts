import { config } from "dotenv";
config();
import SetupExpress from "./server";

const port = Number(process.env.PORT) || undefined;
const server = new SetupExpress(port);

(async (): Promise<void> => {
  await server.init();
  server.start();
})();

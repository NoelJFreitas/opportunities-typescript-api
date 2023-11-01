import "dotenv/config";
import SetupServer from "./server";

const port = process.env.PORT as number | undefined;
const server = new SetupServer(port);

server.setupServer();
server.start();

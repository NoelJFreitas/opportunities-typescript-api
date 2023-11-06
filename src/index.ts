import SetupExpress from "./server";
(() => {
  const app = new SetupExpress();

  app.init();
  app.start();
})();

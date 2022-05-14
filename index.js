require("dotenv").config();

const port = process.env.SERVER_PORT || 4000;

const initializeServer = require("./server/initializeServer");

(async () => {
  await initializeServer(port);
})();

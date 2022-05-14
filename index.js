require("dotenv").config();
const connectDB = require("./db");

const port = process.env.SERVER_PORT || 4000;

const { server } = require("./server");
const initializeServer = require("./server/initializeServer");

const urlDB = process.env.MONGO_STRING;

(async () => {
  await connectDB(urlDB);
  await initializeServer(port);
})();

server();

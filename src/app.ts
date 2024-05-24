import express from 'express';
import cors from "cors";
import * as CONFIG from "./config";
import { createServer } from "http";

import router from "./api/router";


const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", router);

const HOST = CONFIG.HOST;
const PORT = CONFIG.PORT;

const httpServer = createServer(app).listen(PORT, () => {
    console.log(`Started server at ${HOST}:${PORT}`);
    // updatePairsTask.start();
  });
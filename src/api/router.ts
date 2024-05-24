import { Router } from "express";

import { LogController } from "./controllers/logController";

const router = Router();

const testApis = new LogController();

router.use("/logs", testApis.router);
router.get("/", (req, res) => {
  res.status(200).json("Connected!");
});

export default router;
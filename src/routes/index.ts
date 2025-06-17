import { Router } from "express";
import openaiRoutes from "./openai.route";

const router = Router();

export default (): Router => {
  openaiRoutes(router);
  return router;
};

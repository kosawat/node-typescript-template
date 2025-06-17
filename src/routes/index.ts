import { Router } from "express";
import todoRoutes from "./todo.route";

const router = Router();

export default (): Router => {
  todoRoutes(router);

  return router;
};

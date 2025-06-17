import { Router } from "express";

import { getChatResponse } from "../controllers/openai.controller";

export default (router: Router) => {
  router.post("/openai", getChatResponse);
};

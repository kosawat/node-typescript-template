import { Router } from "express";
import {
  getActiveTodos,
  getAllTodos,
  getTodoById,
} from "../controllers/todo.controller";

export default (router: Router) => {
  router.get("/todos", getAllTodos);
  router.get("/todos/active", getActiveTodos);
  router.get("/todos/:id", getTodoById);
};

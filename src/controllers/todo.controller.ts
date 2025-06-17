import { Request, Response } from "express";
import todos from "../data/static-data.json";

export const getAllTodos = (req: Request, res: Response) => {
  res.send(todos);
};

export const getTodoById = (req: Request, res: Response) => {
  const todoId = parseInt(req.params.id, 10);
  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    res.status(404).send({ message: "Todo not found" });
  }

  res.send(todo);
};

export const getActiveTodos = (req: Request, res: Response) => {
  const activeTodos = todos.filter((todo) => todo.isActive);

  console.log("Active Todos:", activeTodos);
  res.send(todos.filter((todo) => todo.isActive));
};

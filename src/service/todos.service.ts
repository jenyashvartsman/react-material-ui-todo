import { Todo } from "../models/todos.model";

const API_URL = "http://localhost:8000/todos";

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch(API_URL);
  return res.ok ? res.json() : [];
};

import { Box, Container } from "@mui/material";
import TodosList from "./components/TodosList";
import { useEffect, useMemo, useState } from "react";
import { getTodos } from "./service/todos.service";
import { Todo } from "./models/todos.model";
import TodosSearch from "./components/TodosSearch";
import TodosNotFound from "./components/TodosNotFound";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    (async () => refreshTodos())();
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.todo.toLowerCase().includes(search.toLowerCase())
    );
  }, [todos, search]);

  const refreshTodos = async (): Promise<void> => {
    setTodos(await getTodos());
  };

  const toggleTodoCompleted = (todo: Todo): void => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodo) => ({
        ...prevTodo,
        completed:
          prevTodo.id === todo.id ? !prevTodo.completed : prevTodo.completed,
      }));
    });
  };

  return (
    <div>
      <Container maxWidth="md">
        <Box my={2}>
          <TodosSearch search={search} onSearchChange={setSearch} />
        </Box>
        {filteredTodos.length ? (
          <TodosList
            todos={filteredTodos}
            handleTodoClick={toggleTodoCompleted}
          />
        ) : (
          <TodosNotFound />
        )}
      </Container>
    </div>
  );
};

export default App;

import { List } from "@mui/material";
import { Todo } from "../models/todos.model";
import TodosListItem from "./TodosListItem";

interface TodosListProps {
  todos: Todo[];
  handleTodoClick: (todo: Todo) => void;
}

const TodosList = ({ todos, handleTodoClick }: TodosListProps) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodosListItem
          key={todo.id}
          todo={todo}
          handleTodoClick={() => handleTodoClick(todo)}
        />
      ))}
    </List>
  );
};

export default TodosList;

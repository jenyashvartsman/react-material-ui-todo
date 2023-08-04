import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Todo } from "../models/todos.model";

interface TodosListItemProps {
  todo: Todo;
  handleTodoClick: () => void;
}

const TodosListItem = ({ todo, handleTodoClick }: TodosListItemProps) => {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <Stack direction="row" spacing={2}>
          <IconButton edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Stack>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={() => handleTodoClick()} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            checked={todo.completed}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.todo} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodosListItem;

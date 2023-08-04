import { TextField } from "@mui/material";

interface TodosSearchProps {
  search: string;
  onSearchChange: (newSearch: string) => void;
}

const TodosSearch = ({ search, onSearchChange }: TodosSearchProps) => {
  return (
    <TextField
      id="standard-search"
      label="Search"
      type="search"
      variant="standard"
      fullWidth
      value={search}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
};

export default TodosSearch;

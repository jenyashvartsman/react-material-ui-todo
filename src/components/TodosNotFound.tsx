import { Card, CardContent, Stack, Typography } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const TodosNotFound = () => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2} justifyContent="center">
          <Typography textAlign="center">
            <ManageSearchIcon fontSize="large" />
          </Typography>
          <Typography variant="h5" textAlign="center">
            Todos not found
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TodosNotFound;

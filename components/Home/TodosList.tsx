import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const TodosList = ({ todos }: any) => {
  const renderCards =
    Array.isArray(todos) &&
    todos.length &&
    todos.map(({ title, body, id, userId }: any, i: number) => (
      <Grid item xs={3}>
        <Card key={id} sx={{ maxWidth: 345, height: 250 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  return (
    <Grid container spacing={5}>
      {todos.length ? renderCards : <h1>No Todos</h1>}
    </Grid>
  );
};

export default TodosList;

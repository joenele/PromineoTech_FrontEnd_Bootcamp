import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const PREFIX = "DeleteMovie";

const classes = {
  button: `${PREFIX}-button`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.button}`]: {
    margin: theme.spacing(2),
  },
}));

// filters out movie object from movies array by ID
const DeleteMovie = ({ movie, movies, setMovies }) => {
  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  return (
    <Root>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={() => handleDelete(movie.id)}
      >
        Delete
      </Button>
    </Root>
  );
};

export default DeleteMovie;

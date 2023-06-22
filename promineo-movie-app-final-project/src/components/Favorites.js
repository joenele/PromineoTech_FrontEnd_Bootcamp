import React from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";


// ShowMovies class prefixes for Material UI styles
const PREFIX = "ShowMovies";
const classes = {
  root: `${PREFIX}-root`,
  paper: `${PREFIX}-paper`,
  poster: `${PREFIX}-poster`,
  info: `${PREFIX}-info`,
};
const Root = styled("div")(({ theme }) => ({
  [`& .${classes.root}`]: {
    margin: theme.spacing(4),
  },
  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  [`& .${classes.poster}`]: {
    width: "100%",
    height: "auto",
    marginBottom: theme.spacing(1),
  },
  [`& .${classes.info}`]: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
}));

// Favorites Component
const Favorites = ({ movies, setMovies }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // filter out matching id from movie array
  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };
  return (
    <Root className={classes.root}>
      <Grid container spacing={4}>
        {movies.map((movie, index) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
              <img
                src={movie.poster}
                alt={`${movie.title} Poster`}
                className={classes.poster}
              />
              <div className={classes.info}>
                <Typography variant="subtitle1">{movie.title}</Typography>
                <Typography variant="subtitle1">{movie.year}</Typography>
              </div>
              <div className={classes.info}>
                <Typography variant="body2">{movie.genre}</Typography>
                <Typography variant="body2">{`$${movie.boxOffice.toLocaleString()}M`}</Typography>
              </div>
            </Paper>
            <Button
              size="small"
              color="secondary"
              onClick={() => handleDelete(movie.id)}
            >
              Delete
            </Button>
            <Button size="small" color="primary" onClick={handleOpen}>
              Edit
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Edit Movie</DialogTitle>
              <DialogContent></DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Save</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default Favorites;

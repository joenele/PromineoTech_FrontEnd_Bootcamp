import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import movies from "./Movies";
import '../App.css'

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

function Genre() {
  const { genre } = useParams();

  // Filter the movies array based on the selected genre
  const selectedGenreMovies = movies.filter((movie) => movie.genre === genre);

  return (
    <div className="main-content">
      <h1>{genre} Movies</h1>
      <Root className={classes.root}>
        <Grid container spacing={4}>
          {selectedGenreMovies.map((movie) => (
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
            </Grid>
          ))}
        </Grid>
      </Root>
    </div>
  );
}

export default Genre;

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { TextField, Button, Container, MenuItem } from "@mui/material";
import movies from './Movies';
import Favorites from './Favorites';

// AddMovieForm prefixes for Material UI styles
const PREFIX = "AddMovieForm";

const classes = {
  root: `${PREFIX}-root`,
  label: `${PREFIX}-label`,
  input: `${PREFIX}-input`,
  button: `${PREFIX}-button`,
};

const Root = styled("form")(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  [`& .${classes.label}`]: {
    fontWeight: "bold",
  },
  [`& .${classes.input}`]: {
    width: "100%",
  },
  [`& .${classes.button}`]: {
    marginTop: theme.spacing(2),
  },
}));

const FormContainer = styled(Container)(({ theme }) => ({
  [`& .${classes.form}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  [`& .${classes.input}`]: {
    marginBottom: theme.spacing(2),
  },
  [`& .${classes.button}`]: {
    marginTop: theme.spacing(2),
  },
}));

// createAllGenres array from all genres in the movie array, remove duplicate genres
const allGenres = Array.from(new Set(movies.map((movie) => movie.genre)));

//initial empty movie
const AddMovies = ({ movies, setMovies }) => {
  const [newMovie, setNewMovie] = useState({
    id:"",
    title: "",
    genre: "",
    year: "",
    description: "",
    boxOffice: "",
    poster: "",
  });

  // create a new movie object
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  // increment ID and add entered values to array
  const handleSubmit = (event) => {
    event.preventDefault();
    const maxId = movies.reduce((acc, cur) => {
        return cur.id > acc ? cur.id : acc;
      }, 0);
    console.log("Form submitted:", newMovie)
    const updatedMovie = { ...newMovie, id: maxId + 1 };
    const updatedMovies = [...movies, updatedMovie];
    setMovies(updatedMovies);
    setNewMovie({ id: "", title: "", year: "", genre: "", boxOffice: "", poster: "" });
    console.log(updatedMovies);
  };
  

  return (
    <div>
    <FormContainer
      maxWidth="sm"
      sx={{ display: "flex", justifyContent: "center", marginTop: "10rem" }}
    >
      <Root className={classes.root} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          label="Title"
          name="title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <TextField
          className={classes.input}
          label="Year"
          name="year"
          value={newMovie.year}
          onChange={handleInputChange}
        />
        <TextField
          className={classes.input}
          label="Genre"
          name="genre"
          select
          value={newMovie.genre}
          onChange={handleInputChange}
        >
          {allGenres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className={classes.input}
          label="Box Office"
          name="boxOffice"
          value={newMovie.boxOffice}
          onChange={handleInputChange}
        />
        <TextField
          className={classes.input}
          label="Poster url"
          name="poster"
          value={newMovie.poster}
          onChange={handleInputChange}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add Movie
        </Button>
      </Root>
    </FormContainer>
    <Favorites movies={movies} setMovies={setMovies}/> {/* Add movies to the list of favorites*/}
    </div>
  );
};

export default AddMovies;

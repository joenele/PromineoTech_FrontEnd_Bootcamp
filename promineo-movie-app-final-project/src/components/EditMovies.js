import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const EditMovies = ({ open, handleClose, movie, setMovies }) => {
  const [title, setTitle] = useState(movie.title);
  const [year, setYear] = useState(movie.year);
  const [genre, setGenre] = useState(movie.genre);
  const [boxOffice, setBoxOffice] = useState(movie.boxOffice);

  const handleSave = () => {
    const updatedMovie = {
      ...movie,
      title,
      year,
      genre,
      boxOffice,
    };
    const updatedMovies = [...movie.filter((m) => m.id !== movie.id), updatedMovie];
    setMovies(updatedMovies);
    handleClose();
  };

  return (
    /* Edit movies form does not display */
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Movie</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Box Office"
          value={boxOffice}
          onChange={(e) => setBoxOffice(e.target.value)}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditMovies;

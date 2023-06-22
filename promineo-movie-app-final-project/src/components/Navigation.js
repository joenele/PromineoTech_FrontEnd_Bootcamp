import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // import Link
import { useNavigate } from 'react-router-dom';
import movies from './Movies';

const PREFIX = 'Navigation';
const classes = {
root: `${PREFIX}-root`,
title: `${PREFIX}-title`,
menuButton: `${PREFIX}-menuButton`,
genreButton: `${PREFIX}-genreButton`,
genreMenu: `${PREFIX}-genreMenu`,
}
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    flexGrow: 1,
  },
  [`& .${classes.title}`]: {
    flexGrow: 1,
  },
  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(2),
  },
  [`& .${classes.genreButton}`]: {
    marginRight: theme.spacing(2),
  },
  [`& .${classes.genreMenu}`]: {
    marginTop: theme.spacing(7),
  },
}));

const Navigation = () => {
    const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleGenreClose = (genre) => {
    setAnchorEl(null);
    setSelectedGenre(genre);
    navigate(`/genres/${genre}`);
  };

  const renderGenreMenuItems = () => {
    const genres = Array.from(new Set(movies.map((movie) => movie.genre)));
    return genres.map((genre) => (
      <MenuItem key={genre} onClick={() => handleGenreClose(genre)}>
        {genre}
      </MenuItem>
    ));
  };

  return (
    <Root className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title}>
            My Movie App
          </Typography>
          <Button component={Link} to="/movies" className={classes.genreButton} color="inherit">
            Movies
          </Button>
          <Button component={Link} to="/favorites" className={classes.genreButton} color="inherit">
            Favorites
          </Button>
          {/* Display Genres from movie array */}
          <Button
            className={classes.genreButton}
            color="inherit"
            aria-controls="genre-menu"
            aria-haspopup="true"
            onClick={handleGenreClick}
            endIcon={<ExpandMore />}
          >
            {selectedGenre || 'Genres'}
          </Button>
          <Menu
            id="genre-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => handleGenreClose('')}
            className={classes.genreMenu}
          >
            {renderGenreMenuItems()}
          </Menu>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Navigation;

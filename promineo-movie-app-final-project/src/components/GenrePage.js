import movies from './Movies';

const GenrePage = ({ genre }) => {
  const filteredMovies = movies.filter(movie => movie.genre === genre);

  return (
    <div>
      {/* Display selected Genre */ }
      <h1>{genre} movies</h1> 
      <ul>
        {filteredMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenrePage;

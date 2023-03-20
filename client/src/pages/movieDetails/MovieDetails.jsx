import { useState } from 'react';
import { getMovieDetails } from '../../axios';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  getMovieDetails(id).then((res) => {
    setMovie(res);
    setLoading(false);
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="movie-details-container">
        <h1>{movie.title}</h1>
        <div className="movie-details">
          <div className="movie-details-left">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            ) : (
              <img src="https://via.placeholder.com/500x750" alt="" />
            )}
          </div>
          <div className="movie-details-right">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Release Date</h3>
            <p>{movie.release_date}</p>
            <h3>Genres</h3>
            <p>
              {movie.genres.map((genre) => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

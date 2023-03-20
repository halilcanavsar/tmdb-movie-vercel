import { useState } from 'react';
import { getTvShowDetails } from '../../axios';
import { useParams } from 'react-router-dom';

function TvShowDetails() {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState({});
  const [loading, setLoading] = useState(true);

  getTvShowDetails(id).then((res) => {
    setTvShow(res);
    setLoading(false);
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="tv-show-details-container">
        <h1>{tvShow.name}</h1>
        <div className="tv-show-details">
          <div className="tv-show-details-left">
            {/* {tvShow.poster_path ? ( */}
            <img
              src={
                tvShow.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
                  : 'https://via.placeholder.com/500x750'
              }
              alt=""
            />
            {/* ) : (
              <img src="https://via.placeholder.com/500x750" alt="" />
            )} */}
          </div>
          <div className="tv-show-details-right">
            <h3>Overview</h3>
            <p>{tvShow.overview}</p>
            <h3>First Air Date</h3>
            <p>{tvShow.first_air_date}</p>
            <h3>Genres</h3>
            <p>
              {tvShow.genres.map((genre) => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvShowDetails;

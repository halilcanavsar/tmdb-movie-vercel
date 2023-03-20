import {
  getMovieDetails,
  getTvShowDetails,
  getActorDetails,
} from '../../axios';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';

function SearchResults({ results, searchType }) {
  const navigate = useNavigate();

  const handleResultClick = (id) => {
    if (searchType === 'Movies') {
      getMovieDetails(id).then((res) => {
        navigate(`/movie/${res && res.id}`);
      });
    } else if (searchType === 'TV Shows') {
      getTvShowDetails(id).then((res) => {
        navigate(`/tv/${res.id}`);
      });
    } else if (searchType === 'Actors') {
      getActorDetails(id).then((res) => {
        navigate(`/actor/${res.id}`);
      });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '12px',
      }}
    >
      {results.map((result) => (
        <Card
          key={result.id}
          onClick={() => handleResultClick(result.id)}
          style={{
            width: '500px',
            height: '750px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
            marginRight: '20px',
            marginBottom: '100px',
            cursor: 'pointer',
            backgroundColor: 'black',

            borderRadius: '10px',
            border: 'none',
          }}
        >
          <h2
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            {searchType === 'Movies' ? result.title : result.name}
          </h2>
          {result.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
              alt=""
              style={{
                width: '500px',
                height: '750px',
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'https://via.placeholder.com/500x750?text=Poster+not+available';
              }}
            />
          ) : result.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${result.profile_path}`}
              alt=""
              style={{
                width: '500px',
                height: '750px',
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'https://via.placeholder.com/500x750?text=Profile+not+available';
              }}
            />
          ) : (
            <img
              src="https://via.placeholder.com/500x750?text=Image+not+available"
              alt=""
              style={{
                width: '500px',
                height: '750px',
              }}
            />
          )}
        </Card>
      ))}
    </div>
  );
}

export default SearchResults;

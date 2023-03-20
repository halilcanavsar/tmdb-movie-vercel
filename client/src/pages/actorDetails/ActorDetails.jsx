import { useState } from 'react';
import { getActorDetails } from '../../axios';
import { useParams } from 'react-router-dom';

function ActorDetails() {
  const { id } = useParams();
  const [actor, setActor] = useState({});
  const [loading, setLoading] = useState(true);

  getActorDetails(id).then((res) => {
    setActor(res);
    setLoading(false);
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="actor-details-container">
        <h1>{actor.name}</h1>
        <div className="actor-details">
          <div className="actor-details-left">
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt=""
              />
            ) : (
              <img src="https://via.placeholder.com/500x750" alt="" />
            )}
          </div>
          <div className="actor-details-right">
            <h3>Biography</h3>
            <p>{actor.biography}</p>
            <h3>Birthday</h3>
            <p>{actor.birthday}</p>
            <h3>Place of Birth</h3>
            <p>{actor.place_of_birth}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActorDetails;

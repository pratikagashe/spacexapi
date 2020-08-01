import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';

const PastMissions = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pastMissions, setPastMissions] = useState();

  useEffect(() => {
    let inEffect = true;
    if (inEffect) {
      fetchPastMissions();
    }
    inEffect = false;
  }, []);

  const fetchPastMissions = () => {
    axios
      .get('https://api.spacexdata.com/v4/launches/past')
      // .get('https://api.spacexdata.com/v3/launches/past?limit=6')
      // For some reason v4 of spacex is not supporting limit query option
      // eslint-disable-next-line func-names
      .then(function(response) {
        const missionData = response.data.reverse().splice(0, 6);
        setPastMissions(missionData);
        setIsLoaded(true);
      })
      // eslint-disable-next-line func-names
      .catch(function(error) {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };

  return (
    <>
      <h2 className="center-text">Past 6 spacex missions</h2>
      {!isLoaded ? (
        <p>Loading</p>
      ) : (
        <div className="landing-page">
          {pastMissions &&
            pastMissions.length > 0 &&
            pastMissions.map((item, id) => (
              // eslint-disable-next-line react/no-array-index-key
              <Card key={id} data={item} />
            ))}
        </div>
      )}
    </>
  );
};

export default PastMissions;

import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import { feedsource } from '../../data/data';
import './styles.scss';
import PastMissions from './PastMissions';

function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    let inEffect = true;
    if (inEffect) {
      setData(feedsource);
      setIsLoaded(true);
    }
    inEffect = false;
  }, []);

  return (
    <>
      {!isLoaded ? (
        <p className="center-text">Loading</p>
      ) : (
        <div className="landing-page">
          {data &&
            data.length > 0 &&
            data.map((item, id) => (
              // eslint-disable-next-line react/no-array-index-key
              <Card key={id} data={item} />
            ))}
        </div>
      )}
      <PastMissions />
    </>
  );
}

export default LandingPage;

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.scss';

const Card = ({ data }) => {
  const formatDetails = details => {
    if (details.length > 100) {
      return `${details.substr(0, 100)}...`;
    }

    return details.substr(0, 100);
  };

  return (
    <div className={cn('card')}>
      <div className={cn('cardContent')}>
        <h4>{data.title ? data.title : data.name}</h4>
        <p>{data.text ? data.text : formatDetails(data.details)}</p>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.object,
};

import { PropTypes } from 'prop-types';
import React from 'react';
import Calendar from '../images/calendar.svg';
import Flag from '../images/flag.svg';
import Pin from '../images/pin.svg';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="title-mission">{name}</p>
        <p
          data-testid="mission-year"
          className="info-mission"
        >

          <img
            src={ Calendar }
            alt="calendar"
            style={ { marginRight: 10 } }
          />

          {year}
        </p>
        <p
          data-testid="mission-country"
          className="info-mission"
        >
          <img src={ Pin } alt="pin" style={ { marginRight: 10 } } />
          {country}
        </p>
        <p
          data-testid="mission-destination"
          className="info-mission"
        >
          <img src={ Flag } alt="flag" style={ { marginRight: 10 } } />
          {destination}
        </p>
      </div>
    );
  }
}

export default MissionCard;

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

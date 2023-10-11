import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="board-card">
        <Title headline="Missões" />
        <section className="missions-cards">
          {missions.map((missoes) => (
            <MissionCard
              key={ missoes.name }
              name={ missoes.name }
              year={ missoes.year }
              country={ missoes.country }
              destination={ missoes.destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;

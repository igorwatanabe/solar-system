import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <section>
          {planets.map((planetas) => (
            <PlanetCard
              key={ planetas.name }
              planetName={ planetas.name }
              planetImage={ planetas.image }
            />
          ))}
        </section>

        {/* <Title headline="Missões" /> */}

      </div>
    );
  }
}

export default SolarSystem;

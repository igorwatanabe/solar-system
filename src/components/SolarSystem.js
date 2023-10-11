import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="solar-system">
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

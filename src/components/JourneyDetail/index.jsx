import './style.css';
import { BusStop } from '../BusStop';

export const JourneyDetail = ({ journey }) => {
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.map((cesta) => (
          <BusStop
            key={cesta.code}
            name={cesta.name}
            station={cesta.station}
            time={cesta.time}
          />
        ))}
      </div>
    </div>
  );
};

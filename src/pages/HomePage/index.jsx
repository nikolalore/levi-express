import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
  };

  const handleBuy = async () => {
    const response = await fetch(
      'https://apps.kodim.cz/daweb/leviexpress/api/reservation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: journey.autoSeat,
          journeyId: journey.journeyId,
        }),
      },
    );
    const data = await response.json();
    const reservationId = data.results.reservationId;
    navigate(`/reservation/${reservationId}`);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && (
        <>
          <JourneyDetail journey={journey.stops} />
          <SelectedSeat number={journey.autoSeat} />
          <div className="controls container">
            <button onClick={handleBuy} className="btn btn--big" type="button">
              Rezervovat
            </button>
          </div>
        </>
      )}
    </main>
  );
};

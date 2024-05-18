import { useParams, useSearchParams } from 'react-router-dom';
import './style.css';
import { useEffect, useState } from 'react';

export const ReservationPage = () => {
  const { id } = useParams();

  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`,
      );
      const data = await response.json();
      setReservation(data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <h1 className="site-title">
            <a href="/">LeviExpress</a>
          </h1>
        </div>
      </header>

      {reservation && (
        <div className="reservation container">
          <h2>Vaše e-jízdenka č. {id}</h2>
          <div className="reservation__body">
            <div className="reservation__headings">
              <p>Datum cesty:</p>
              <p>Odjezd:</p>
              <p>Příjezd:</p>
              <p>Sedadlo:</p>
            </div>
            <div className="reservation__info">
              <p>{reservation.date}</p>
              <p>
                {reservation.fromCity.name}, {reservation.fromCity.time}
              </p>
              <p>
                {reservation.toCity.name}, {reservation.toCity.time}
              </p>
              <p>{reservation.seatNumber}</p>
            </div>
          </div>
        </div>
      )}

      <footer>
        <div className="container">
          <div className="footer-title">LeviExpress</div>
          <div className="copyright">
            Czechitas Digitální akademie: Web, © 2021–2024
          </div>
        </div>
      </footer>
    </>
  );
};

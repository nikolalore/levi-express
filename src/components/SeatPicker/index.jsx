import { Seat } from '../Seat';
import { SeatRow } from '../SeatRow';
import './style.css';

const testRow = [
  {
    number: 33,
    isOccupied: false,
  },
  {
    number: 29,
    isOccupied: true,
  },
  {
    number: 25,
    isOccupied: false,
  },
];

export const SeatPicker = ({ seats }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, index) => (<SeatRow key={index} row={row} />))}
        
      </div>
    </div>
  );
};

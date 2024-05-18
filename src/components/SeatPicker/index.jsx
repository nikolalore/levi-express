import { Seat } from "../Seat"
import "./style.css"

export const SeatPicker = () => {
  return(

    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
       <Seat number={1}/>
       <Seat number={17}/>
       <Seat number={33}/>
      </div>
    </div>
  )
}

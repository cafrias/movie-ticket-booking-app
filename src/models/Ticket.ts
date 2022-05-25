import { Show } from ".";

export interface Ticket {
  /**
   * ISO 8601 string with the date in which this ticket as been created.
   */
  createdAt: string;
  show: string;
  row: number;
  seats: number[];
}

interface CreateDTO {
  show: Show.Show;
  seatNumbers: number[];
}

export function create({ seatNumbers, show }: CreateDTO): Ticket {
  if (seatNumbers.length === 0) {
    throw new Error("Create Ticket: Must select at least one vacant seat");
  }

  if (seatNumbers.length > 3) {
    throw new Error("Create Ticket: A Ticket can have a maximum of 3 seats");
  }

  // Find all seats
  const seatsMap = new Map(show.seats.map((s) => [s.number, s]));
  const selectedSeats: Show.Show["seats"] = [];
  for (const seatNumber of seatNumbers) {
    const seat = seatsMap.get(seatNumber);
    if (!seat) {
      throw new Error(`Create Ticket: Seat "${seatNumber}" not found`);
    }

    if (!seat.vacant) {
      throw new Error(`Create Ticket: Seat "${seatNumber}" is already taken`);
    }

    const prevSeat = selectedSeats[selectedSeats.length - 1];
    if (prevSeat && prevSeat.row !== seat.row) {
      throw new Error("Create Ticket: Seats are in different rows");
    }

    selectedSeats.push(seat);
  }

  // After all validations, we can update the availability
  selectedSeats.forEach((s) => (s.vacant = false));

  return {
    createdAt: new Date().toISOString(),
    seats: [...seatNumbers],
    row: selectedSeats[0].row,
    show: show.id,
  };
}

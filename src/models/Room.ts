import { Seat } from "./Seat";

export interface Room {
  id: string;
  name: string;

  /**
   * Seats are distributed in rows and columns,
   * we use a two dimensional array to naturally convey
   * this structure.
   */
  seats: Seat[];
}

/**
 * Returns the number of seats in a Room.
 */
export function getNumberOfSeats(room: Room): number {
  return room.seats.length;
}

import { SeatOccupancy } from "./SeatOccupancy";

/**
 * A Show is a projection of a Movie in a given Date and Time at
 * a specific Room.
 */
export interface Show {
  id: string;
  /**
   * ISO 8601 string
   */
  dateTime: string;
  movie: string;
  room: string;
  seats: SeatOccupancy[][];
}

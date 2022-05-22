import { Seat } from "./Seat";

/**
 * The occupancy of a Seat, this only makes sense in the context
 * of a Show. You could also think of this as the "Seat" of a Show.
 */
export interface SeatOccupancy extends Seat {
  vacant: boolean;
}

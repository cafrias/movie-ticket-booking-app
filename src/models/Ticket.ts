import { Seat } from "./Seat";

export interface Ticket {
  /**
   * ISO 8601 string with the date in which this ticket as been created.
   */
  createdAt: string;
  show: string;
  seats: Seat[];
}

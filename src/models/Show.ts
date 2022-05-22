import { v4 as uuidv4 } from "uuid";
import { Movie, Room, SeatOccupancy } from ".";

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
  seats: SeatOccupancy.SeatOccupancy[][];
}

interface CreateDTO {
  movie: Movie.Movie;
  room: Room.Room;
  dateTime: string;
}

/**
 * Creates a new Show
 */
export function create(dto: CreateDTO): Show {
  return {
    id: uuidv4(),
    dateTime: dto.dateTime,
    seats: dto.room.seats.map((row) =>
      row.map((seat) => ({ ...seat, vacant: true }))
    ),
    movie: dto.movie.id,
    room: dto.room.id,
  };
}

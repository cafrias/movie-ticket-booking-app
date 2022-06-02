import { Show } from "../../models";
import { add, sub } from "date-fns";
import { mockMovies } from "./mockMovies";
import { mockRooms } from "./mockRooms";

export const mockShows: Show.Show[] = [
  //
  // Past Show
  //
  Show.create({
    dateTime: sub(new Date(), { hours: 5 }).toISOString(),
    movie: mockMovies[0],
    room: mockRooms[0],
  }),
  Show.create({
    dateTime: sub(new Date(), { days: 2 }).toISOString(),
    movie: mockMovies[0],
    room: mockRooms[0],
  }),

  //
  // Currently Playing
  //
  Show.create({
    dateTime: add(new Date(), { hours: 5 }).toISOString(),
    movie: mockMovies[0],
    room: mockRooms[0],
  }),
  Show.create({
    dateTime: add(new Date(), { hours: 12 }).toISOString(),
    movie: mockMovies[0],
    room: mockRooms[0],
  }),
  Show.create({
    dateTime: add(new Date(), { days: 4 }).toISOString(),
    movie: mockMovies[0],
    room: mockRooms[0],
  }),
  Show.create({
    dateTime: add(new Date(), { days: 3 }).toISOString(),
    movie: mockMovies[1],
    room: mockRooms[0],
  }),

  //
  // Coming Soon
  //
  Show.create({
    dateTime: add(new Date(), { days: 6 }).toISOString(),
    movie: mockMovies[0],
    room: mockRooms[0],
  }),
  Show.create({
    dateTime: add(new Date(), { days: 8 }).toISOString(),
    movie: mockMovies[2],
    room: mockRooms[0],
  }),
];

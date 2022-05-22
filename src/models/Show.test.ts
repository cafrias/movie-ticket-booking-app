import { Room, Show } from ".";
import { mockedMovies } from "../test/data/mockedMovies";
import { mockedRooms } from "../test/data/mockedRooms";

describe("Show", () => {
  describe("create", () => {
    test("creates correctly", () => {
      const movie = mockedMovies[0];
      const room = mockedRooms[0];
      const nextWeekAt20 = new Date();
      nextWeekAt20.setDate(nextWeekAt20.getDate() + 7);

      const newShow = Show.create({
        room,
        dateTime: nextWeekAt20.toISOString(),
        movie,
      });

      expect(newShow.dateTime).toBe(nextWeekAt20.toISOString());

      // Creates all seats vacant
      const numberOfSeats = newShow.seats.reduce(
        (acc, row) => acc + row.length,
        0
      );
      expect(numberOfSeats).toBe(Room.getNumberOfSeats(room));
      for (const row of newShow.seats) {
        for (const seat of row) {
          expect(seat.vacant).toBe(true);
        }
      }

      expect(newShow.movie).toBe(movie.id);
      expect(newShow.room).toBe(room.id);

      // Is valid UUID? TODO: create custom matcher.
      expect(newShow.id).toMatch(
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi
      );
    });

    xtest("cannot create in the past", () => {});

    xtest("cannot create in more than two weeks in the future", () => {});
  });
});

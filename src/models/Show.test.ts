import { Room, Show } from ".";
import { mockMovies } from "../data/mocks/mockMovies";
import { mockRooms } from "../data/mocks/mockRooms";

describe("Show", () => {
  describe("create", () => {
    test("creates correctly", () => {
      const movie = mockMovies[0];
      const room = mockRooms[0];
      const nextWeekAt20 = new Date();
      nextWeekAt20.setDate(nextWeekAt20.getDate() + 7);

      const newShow = Show.create({
        room,
        dateTime: nextWeekAt20.toISOString(),
        movie,
      });

      expect(newShow.dateTime).toBe(nextWeekAt20.toISOString());

      // Creates all seats vacant
      const numberOfSeats = newShow.seats.length;
      expect(numberOfSeats).toBe(Room.getNumberOfSeats(room));
      for (const seat of newShow.seats) {
        expect(seat.vacant).toBe(true);
      }

      expect(newShow.movie).toBe(movie.id);
      expect(newShow.room).toBe(room.id);

      // Is valid UUID? TODO: create custom matcher.
      expect(newShow.id).toMatch(
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi
      );
    });
  });
});

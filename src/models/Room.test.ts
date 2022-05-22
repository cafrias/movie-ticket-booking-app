import { Room } from ".";
import { mockedRooms } from "../test/data/mockedRooms";

describe("Room", () => {
  describe(Room.getNumberOfSeats.name, () => {
    test("returns correctly", () => {
      const output = Room.getNumberOfSeats(mockedRooms[0]);
      expect(output).toBe(46);
    });
  });
});

import { Room } from ".";
import { mockRooms } from "../data/mocks/mockRooms";

describe("Room", () => {
  describe(Room.getNumberOfSeats.name, () => {
    test("returns correctly", () => {
      const output = Room.getNumberOfSeats(mockRooms[0]);
      expect(output).toBe(46);
    });
  });
});

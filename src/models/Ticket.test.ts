import { Show } from "./Show";
import { create } from "./Ticket";

describe("Ticket", () => {
  describe(create.name, () => {
    let show: Show;

    beforeEach(() => {
      show = {
        id: "show_id",
        seats: [
          { isVip: true, number: 1, vacant: true, row: 1 },
          { isVip: false, number: 2, vacant: true, row: 2 },
          { isVip: false, number: 3, vacant: true, row: 2 },
          { isVip: false, number: 4, vacant: true, row: 2 },
          { isVip: false, number: 5, vacant: true, row: 2 },
          { isVip: false, number: 6, vacant: false, row: 2 },
        ],
      } as Show;
    });

    test("creates correctly", () => {
      const seatNumbers = [2, 3];
      const res = create({ seatNumbers, show });

      expect(Math.floor(new Date(res.createdAt).getTime() / 1000)).toBe(
        Math.floor(Date.now() / 1000)
      );
      expect(res.seats).toEqual(seatNumbers);
      expect(res.row).toBe(2);
      expect(res.show).toBe(show.id);

      // Updates show vacancy
      expect(show.seats[1].vacant).toBe(false);
      expect(show.seats[2].vacant).toBe(false);
    });

    test("when tickets are in different rows", () => {
      const seatNumbers = [1, 2];

      try {
        create({ seatNumbers, show });
      } catch (err) {
        expect((err as Error).message).toBe(
          "Create Ticket: Seats are in different rows"
        );

        // It didn't change the first seat.
        expect(show.seats[0].vacant).toBe(true);

        return;
      }

      throw new Error("It did not throw");
    });

    test("when seat is not found", () => {
      const seatNumbers = [1, 200];

      try {
        create({ seatNumbers, show });
      } catch (err) {
        expect((err as Error).message).toBe(
          `Create Ticket: Seat "200" not found`
        );

        expect(show.seats[0].vacant).toBe(true);

        return;
      }

      throw new Error("It did not throw");
    });

    test("when more than 3 seats", () => {
      const seatNumbers = [2, 3, 4, 5];

      try {
        create({ seatNumbers, show });
      } catch (err) {
        expect((err as Error).message).toBe(
          "Create Ticket: A Ticket can have a maximum of 3 seats"
        );

        expect(show.seats[1].vacant).toBe(true);
        expect(show.seats[2].vacant).toBe(true);
        expect(show.seats[3].vacant).toBe(true);
        expect(show.seats[4].vacant).toBe(true);

        return;
      }

      throw new Error("It did not throw");
    });

    test("when no seat", () => {
      const seatNumbers: number[] = [];

      try {
        create({ seatNumbers, show });
      } catch (err) {
        expect((err as Error).message).toBe(
          "Create Ticket: Must select at least one vacant seat"
        );

        return;
      }

      throw new Error("It did not throw");
    });

    test("when one seat is already taken", () => {
      const seatNumbers = [4, 5, 6];

      try {
        create({ seatNumbers, show });
      } catch (err) {
        expect((err as Error).message).toBe(
          `Create Ticket: Seat "6" is already taken`
        );

        // It didn't change the seats availability
        expect(show.seats[3].vacant).toBe(true);
        expect(show.seats[4].vacant).toBe(true);
        expect(show.seats[5].vacant).toBe(false);

        return;
      }

      throw new Error("It did not throw");
    });
  });
});

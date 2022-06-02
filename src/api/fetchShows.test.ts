import { add } from "date-fns";
import { mockShows } from "../data/mocks/mockShows";
import { fetchShows } from "./fetchShows";

describe(fetchShows.name, () => {
  test("no filter", async () => {
    const res = await fetchShows();
    expect(res).toHaveLength(mockShows.length);
  });

  test("filter by date", async () => {
    const res = await fetchShows({
      filters: {
        from: new Date().toISOString(),
        to: add(new Date(), { days: 1 }).toISOString(),
      },
    });
    expect(res).toHaveLength(2);
  });

  test("filter by movie", async () => {
    const res = await fetchShows({
      filters: {
        movieId: "0320c820-d6aa-4621-b7d1-f58e1df8ecbf",
      },
    });
    expect(res).toHaveLength(1);
  });
});

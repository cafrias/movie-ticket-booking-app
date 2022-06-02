import { add } from "date-fns";
import { mockMovies } from "../data/mocks/mockMovies";
import { fetchMovies } from "./fetchMovies";

describe(fetchMovies.name, () => {
  test("no filters", async () => {
    const res = await fetchMovies();
    expect(res).toHaveLength(mockMovies.length);
  });

  test("search", async () => {
    const res = await fetchMovies({ filters: { search: "other movie" } });
    expect(res).toHaveLength(2);
  });

  test("has show", async () => {
    const res = await fetchMovies({
      filters: {
        showFrom: new Date().toISOString(),
        showTo: add(new Date(), { days: 2 }).toISOString(),
      },
    });
    expect(res).toHaveLength(1);
  });
});

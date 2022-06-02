import { mockMovies } from "../data/mocks/mockMovies";
import { matchesSearch } from "./Movie";

describe("Movie", () => {
  describe(matchesSearch.name, () => {
    test("no match", () => {
      const match = matchesSearch(mockMovies[0], "lorem ipsum");
      expect(match).toBe(false);
    });

    test("match in title", () => {
      const match = matchesSearch(mockMovies[0], "doctor strange");
      expect(match).toBe(true);
    });

    test("match in subtitle", () => {
      const match = matchesSearch(mockMovies[0], "multiverse of madness");
      expect(match).toBe(true);
    });

    test("match in synopsis", () => {
      const match = matchesSearch(mockMovies[0], "forbidden spell");
      expect(match).toBe(true);
    });
  });
});

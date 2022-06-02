import { mockMovies } from "../data/mocks/mockMovies";
import { Movie } from "../models";
import { fetchShows } from "./fetchShows";

export interface FetchMoviesInput {
  filters?: {
    search?: string;

    /**
     * Filters the movies that have at least one show from this date in ISO format.
     */
    showFrom?: string;

    /**
     * Filters the movies that have at least one show to this date in ISO format.
     */
    showTo?: string;
  };
}

export async function fetchMovies(
  input: FetchMoviesInput = {}
): Promise<Movie.Movie[]> {
  const { search, showFrom, showTo } = input.filters || {};

  const movieIds = new Set(
    (await fetchShows({ filters: { from: showFrom, to: showTo } })).map(
      (s) => s.movie
    )
  );

  const filtered = mockMovies.filter((movie) => {
    if (search && !Movie.matchesSearch(movie, search)) {
      return false;
    }

    if (movieIds.size > 0 && !movieIds.has(movie.id)) {
      return false;
    }

    return true;
  });

  return Promise.resolve(filtered);
}

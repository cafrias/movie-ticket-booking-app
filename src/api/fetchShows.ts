import { compareAsc } from "date-fns";
import { mockShows } from "../data/mocks/mockShows";
import { Show } from "../models";

export interface FetchShowsInput {
  filters?: {
    /**
     * Filters out shows that happen before this date in ISO 8601.
     */
    from?: string;

    /**
     * Filters out shows that happen after this date in ISO 8601.
     */
    to?: string;

    /**
     * The ID of the movie which you want to look for shows
     */
    movieId?: string;
  };
}

/**
 * Mock call to endpoint that returns the shows
 */
export function fetchShows(
  input: FetchShowsInput = { filters: {} }
): Promise<Show.Show[]> {
  const { from, to, movieId } = input.filters || {};

  const filtered = mockShows.filter((show) => {
    if (from && compareAsc(new Date(show.dateTime), new Date(from)) === -1) {
      return false;
    }

    if (to && compareAsc(new Date(show.dateTime), new Date(to)) === 1) {
      return false;
    }

    if (movieId && movieId !== show.movie) {
      return false;
    }

    return true;
  });

  return Promise.resolve(filtered);
}

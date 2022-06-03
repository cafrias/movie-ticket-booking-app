import useSWR, { SWRConfiguration } from "swr";
import { fetchMovies, FetchMoviesInput } from "../api/fetchMovies";
import { Movie } from "../models";

export const USE_MOVIES_KEY = "/movies";

export type UseMoviesKey = [typeof USE_MOVIES_KEY, FetchMoviesInput];

export function useMovies(
  filters: FetchMoviesInput["filters"] = {},
  opt: SWRConfiguration<Movie.Movie[], Error> = {},
  disabled = false
) {
  return useSWR<Movie.Movie[], Error, UseMoviesKey | false>(
    !disabled && [USE_MOVIES_KEY, { filters }],
    (_key, input) => fetchMovies(input),
    opt
  );
}

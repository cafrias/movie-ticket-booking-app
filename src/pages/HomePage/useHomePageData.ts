import { addDays, addMinutes, endOfDay } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { useMovies } from "../../hooks/useMovies";

export interface HomePageData {
  nowPlaying: ReturnType<typeof useMovies>;
  comingSoon: ReturnType<typeof useMovies>;
  popular: ReturnType<typeof useMovies>;
}

/**
 * The date update interval in Milliseconds
 */
export const DATE_UPDATE_INTERVAL_MS = 60_000 * 5;

export function useHomePageData(): HomePageData {
  const [from, setFrom] = useState(addMinutes(new Date(), 30).toISOString());
  const [to, setTo] = useState(endOfDay(addDays(new Date(), 5)).toISOString());

  useEffect(() => {
    setInterval(() => {
      setFrom(addMinutes(new Date(), 30).toISOString());
      setTo(endOfDay(addDays(new Date(), 5)).toISOString());
    }, DATE_UPDATE_INTERVAL_MS);
  }, []);

  const nowPlaying = useMovies({
    showFrom: from,
    showTo: to,
  });
  const newPlayingIds = useMemo(() => {
    return nowPlaying.data?.map((m) => m.id);
  }, [nowPlaying.data]);

  const comingSoon = useMovies(
    {
      showFrom: to,
      exclude: newPlayingIds,
    },
    undefined,
    !newPlayingIds
  );

  // TODO: define what a popular movie is
  const popular = useMovies({});

  return {
    nowPlaying,
    comingSoon,
    popular,
  };
}

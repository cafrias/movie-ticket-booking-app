import { renderHook, act } from "@testing-library/react";
import { addMilliseconds, compareAsc, endOfDay, parseISO } from "date-fns";
import { mockMovies } from "../../data/mocks/mockMovies";
import { useMovies } from "../../hooks/useMovies";
import { DATE_UPDATE_INTERVAL_MS, useHomePageData } from "./useHomePageData";

jest.mock("../../hooks/useMovies");

describe(useHomePageData.name, () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  test("works correctly", () => {
    const now = new Date(2000, 0, 1, 18, 0);
    const showFromDate = new Date(2000, 0, 1, 18, 30);
    const showToDate = endOfDay(new Date(2000, 0, 6));

    jest.setSystemTime(now);

    // Sets up interval
    const nowPlaying = [mockMovies[0], mockMovies[1]];
    const comingSoon = [mockMovies[2]];

    (useMovies as jest.Mock).mockImplementation(({ showFrom, showTo }) => {
      if (showFrom && showTo) {
        return { data: nowPlaying };
      }

      if (showFrom) {
        return { data: comingSoon };
      }

      return { data: [] };
    });

    const { result } = renderHook(useHomePageData);

    expect(result.current.comingSoon.data).toEqual(comingSoon);
    expect(result.current.nowPlaying.data).toEqual(nowPlaying);
    expect(result.current.popular.data).toEqual([]);

    // Called coming soon correctly
    {
      const { showFrom, showTo } = (useMovies as jest.Mock).mock.calls[0][0];
      expect(compareAsc(parseISO(showFrom), showFromDate)).toBe(0);
      expect(compareAsc(parseISO(showTo), showToDate)).toBe(0);
    }

    // Called nowPlaying correctly
    {
      const { showTo, showFrom, exclude } = (useMovies as jest.Mock).mock
        .calls[1][0];
      expect(showTo).toBeUndefined();
      expect(
        compareAsc(parseISO(showFrom), endOfDay(new Date(2000, 0, 6)))
      ).toBe(0);
      expect(exclude).toEqual([mockMovies[0].id, mockMovies[1].id]);
    }

    // TODO: test it attaches an interval

    // Updates dates after interval passed
    (useMovies as jest.Mock).mockClear();

    act(() => {
      jest.advanceTimersByTime(DATE_UPDATE_INTERVAL_MS);
    });

    {
      const { showFrom, showTo } = (useMovies as jest.Mock).mock.calls[0][0];
      expect(
        compareAsc(
          parseISO(showFrom),
          addMilliseconds(showFromDate, DATE_UPDATE_INTERVAL_MS)
        )
      ).toBe(0);
      expect(compareAsc(parseISO(showTo), showToDate)).toBe(0);
    }
  });
});

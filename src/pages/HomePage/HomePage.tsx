import React from "react";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { MovieThumbnailList } from "../../components/Movie/MovieThumbnailList";
import { mockMovies } from "../../data/mocks/mockMovies";

import css from "./HomePage.module.scss";

export function HomePage() {
  return (
    <>
      <section className={css.container}>
        <header>
          <h1 className={css.title}>Choose Movie</h1>
        </header>

        <form className={css.form}>
          <input className={css.search} type="search" placeholder="Search" />
        </form>

        <MovieThumbnailList items={mockMovies} title="Now Playing" />

        <MovieThumbnailList items={mockMovies} title="Coming Soon" />

        <MovieThumbnailList items={mockMovies} title="Top movies" />
      </section>
      <BottomNav />
    </>
  );
}

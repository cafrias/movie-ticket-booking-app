import React from "react";
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
      </section>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">Tickets</a>
          </li>
          <li>
            <a href="#">Tiles</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../models";

import css from "./MovieThumbnailList.module.scss";

export interface MovieThumbnailListProps {
  title: string;
  items: Movie.Movie[];
}

export function MovieThumbnailList({ title, items }: MovieThumbnailListProps) {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {items.map((movie) => {
          return (
            <li className={css.item} key={movie.id}>
              <Link title={movie.title} to="#">
                <img
                  className={css.img}
                  src={movie.thumbnailImg}
                  alt={`Thumbnail of movie ${movie.title}`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

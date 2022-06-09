import React from "react";

import css from "./BottomNav.module.scss";
import { BottomNavLink } from "./BottomNavLink";
import { BottomNavLinks } from "./constants";

export function BottomNav() {
  return (
    <nav className={css.container}>
      <ul className={css.list}>
        {BottomNavLinks.map((l) => {
          return (
            <li className={css.listItem} key={l.title}>
              <BottomNavLink {...l} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

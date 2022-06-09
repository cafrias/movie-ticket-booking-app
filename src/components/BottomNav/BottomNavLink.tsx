import React from "react";
import { Link } from "react-router-dom";

import css from "./BottomNavLink.module.scss";

export interface BottomNavLinkProps {
  href: string;
  title: string;
  icon: string;
}

export function BottomNavLink({ href, icon, title }: BottomNavLinkProps) {
  return (
    <Link className={css.link} title={title} to={href}>
      <img className={css.icon} src={icon} alt={title} />
    </Link>
  );
}

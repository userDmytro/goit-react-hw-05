import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function Navigation() {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ data }) {
  const location = useLocation();
  return (
    <ul>
      {data.map((movie) => (
        <li className={css.item} key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

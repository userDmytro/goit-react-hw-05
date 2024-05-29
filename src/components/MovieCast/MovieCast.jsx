import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api";
import { useEffect, useState } from "react";
import profilePic from "../../images/profilePic.jpg";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCact] = useState([]);

  useEffect(() => {
    const openDetails = async () => {
      try {
        const data = await getMovieCast(movieId);
        setMovieCact(data);
      } catch (error) {
        console.log(error);
      }
    };
    openDetails();
  }, [movieId]);

  return (
    <ul className={css.list}>
      {movieCast.length > 0 &&
        movieCast.map((list) => (
          <li className={css.item} key={list.id}>
            <img
              className={css.img}
              src={
                list.profile_path
                  ? `https://image.tmdb.org/t/p/w500${list.profile_path}`
                  : profilePic
              }
              alt={list.name}
            />
            <h4 className={css.name}>{list.name}</h4>
            {list.character && <p className={css.descr}>as {list.character}</p>}
          </li>
        ))}
    </ul>
  );
}

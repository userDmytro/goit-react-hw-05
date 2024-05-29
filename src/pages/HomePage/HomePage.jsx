import { lazy, useEffect, useState } from "react";
import { getTrendingMovies } from "../../api";
const MovieList = lazy(() => import("../../components/MovieList/MovieList"));
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        setIsError(false);
        const moviesData = await getTrendingMovies();
        setTrendMovies(moviesData);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);
  return (
    <section className={css.container}>
      <h2 className={css.title}>Trending today</h2>
      <MovieList data={trendMovies} />
      {loading && <Loader />}
      {isError && <ErrorMsg />}
    </section>
  );
}

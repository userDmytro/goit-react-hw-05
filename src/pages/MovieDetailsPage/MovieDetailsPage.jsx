import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense, useRef, lazy } from "react";
import { getMovieDetails } from "../../api";
const MovieInfo = lazy(() => import("../../components/MovieInfo/MovieInfo"));
// import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    const openDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    openDetails();
  }, [movieId]);

  return (
    <div className={css.container}>
      <p className={css.backLink}>
        <Link to={backLinkRef.current}>Go back</Link>
      </p>

      {loading && <Loader />}
      {movieDetails && <MovieInfo movieDetails={movieDetails} />}
      <div>
        <h3 className={css.info}>Additional information</h3>
        <ul>
          <li className={css.infolink}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.infolink}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

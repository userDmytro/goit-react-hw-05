import css from "./MoviesPage.module.css";
import { getSearchMovies } from "../../api";
import { useEffect, useState, lazy } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import { Toaster } from "react-hot-toast";
const MovieList = lazy(() => import("../../components/MovieList/MovieList"));

export default function MoviesPage() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParms, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setIsError(false);
        const searchedMovies = await getSearchMovies(
          searchQuery || searchParms.get("query")
        );
        setSearchedMovies(searchedMovies.results);

        // if (searchedMovies.total_results === 0) {
        //   const notifyNoResults = () =>
        //     toast.error("We did not find anything for your query. Try again!", {
        //       position: "top-right",
        //     });
        //   return notifyNoResults();
        // }
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchQuery, searchParms]);

  const handleSearch = async (topic) => {
    setSearchQuery(topic);
    searchParms.set("query", topic);
    setSearchParams(searchParms);
  };

  return (
    <section className={css.container}>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {searchedMovies.length > 0 && <MovieList data={searchedMovies} />}
      {loading && <Loader />}
      {isError && <ErrorMsg />}
    </section>
  );
}

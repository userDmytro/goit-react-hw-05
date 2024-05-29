import css from "./MovieInfo.module.css";

export default function MovieInfo({ movieDetails }) {
  const genres = movieDetails.genres;
  return (
    <section className={css.section}>
      {movieDetails.poster_path ? (
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}
  `}
          alt={`poster ${movieDetails.title}`}
        />
      ) : (
        <div className={css.noposter}>{movieDetails.title}</div>
      )}
      <div className={css.details}>
        <h2 className={css.title}>{movieDetails.title}</h2>
        {movieDetails.tagline && (
          <p className={css.slug}>{movieDetails.tagline}</p>
        )}
        <ul className={css.descr}>
          <li>
            <h4 className={css.subtitle}>Year</h4>
            <p className={css.text}>{movieDetails.release_date}</p>
          </li>
          <li>
            <h4 className={css.subtitle}>Overview</h4>
            <p className={css.text}>{movieDetails.overview}</p>
          </li>
          <li>
            <h4 className={css.subtitle}>Genres</h4>
            <ul className={css.genres}>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

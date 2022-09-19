import styles from "../styles/Movie.module.scss";

export default function Movie({movie}) {
    console.log(movie)
  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} />
        <p>{movie.title}</p>
      </div>
      <div className={styles.footer}>
        <span> IMDb: {movie.vote_average}</span>
        <button>Vote ({movie.vote_count})</button>
      </div>
    </div>
  );
}

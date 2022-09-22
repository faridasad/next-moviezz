import Link from "next/link";
import styles from "../styles/Movie_card.module.scss";

export default function Movie({ movie }) {

  return (
    <div className={styles.card}>
      <Link href={`/${movie.id}`}>
        <div className={styles.cover}>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
          />
          <p>{movie.title}</p>
        </div>
      </Link>
      <div className={styles.footer}>
        <span> IMDb: {movie.vote_average}</span>
        <span>{movie.release_date.slice(0, 4)}</span>
      </div>
    </div>
  );
}

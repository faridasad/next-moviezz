import axios from "axios";
import Head from "next/head";
import styles from "../styles/Movie.module.scss";

export default function MovieDetail(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <div className={styles.single_movie}>
        <div className={styles.wrapper}>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${props.poster_path}`}
            alt={props.title}
          />
          <div className={styles.details}>
            <h2>{props.title}</h2>
            <p>{props.overview}</p>
            <ul>
              <li>Release date: {props.release_date.slice(0, 4)}</li>
              <li>Runtime: {props.runtime} mins</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}&language=en-US`
  );

  return {
    props: res.data,
  };
}

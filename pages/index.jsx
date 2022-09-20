import axios from "axios";
import Head from "next/head";
import Movie from "../components/Movie";
import styles from "../styles/Home.module.scss";

export default function Home(props) {
  return (
    <>

    <Head>
      <title>Moviezz</title>
    </Head>

      <div className={styles.main}>
        <div className={styles.wrapper}>
          {props.results.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  return {
    props: result.data,
  };
}

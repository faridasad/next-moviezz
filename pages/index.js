import axios from "axios"
import Movie from "../components/Movie"
import styles from "../styles/Home.module.scss"

export default function Home(props) {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        {props.results.map(movie => {
          return <Movie movie={movie} />
        })}
      </div>
    </div>
  )
}


export async function getServerSideProps() {

  const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=49dc669812ce416cb1475530ce96b9fc&language=en-US&page=1")
  const result = await data.json()

  return {
    props: result,
  }
}
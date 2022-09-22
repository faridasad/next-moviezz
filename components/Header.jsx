import styles from "../styles/Header.module.scss"
import { useRouter } from "next/router"

export default function Header(props) {
    const router = useRouter()
    const list = props.ids

    return(
        <header className={styles.header}>
            <h3 onClick={() => router.push('/')}>Moviezz</h3>
            <nav>
                <ul>
                    <li> <button disabled={!list} onClick={() => router.push(`/${list[Math.floor(Math.random() * list.length)]}`)}>I feel lucky</button></li>
                    <li><a target="_blank" href="https://www.themoviedb.org/documentation/api">API</a></li>
                </ul>
            </nav>
        </header>
    )
}
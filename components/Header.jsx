import styles from "../styles/Header.module.scss"
import { useRouter } from "next/router"

export default function Header() {

    const router = useRouter()

    return(
        <header className={styles.header}>
            <h3 onClick={() => router.push('/')}>Moviezz</h3>
            <nav>
                <ul>
                    <li>I feel lucky</li>
                    <li>API</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    )
}
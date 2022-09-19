import styles from "../styles/Header.module.scss"

export default function Header() {
    return(
        <header className={styles.header}>
            <h3>Moviezz</h3>
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
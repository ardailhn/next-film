import Link from 'next/link'
import { FaPlayCircle } from 'react-icons/fa'
import styles from './styles.module.css'

export default function Header() {
    return (
        <header className={`${styles.header} container fluid`}>
            <div className={styles.headerWrapper}>
                <Link href="/" className={styles.logo}>
                    <FaPlayCircle />
                    NEXTFLIMS
                </Link>
                <nav className={styles.navigationMenu}>
                    <Link href="/movies">Movies</Link>
                    <Link href="/series">Series</Link>
                </nav>
            </div>
        </header>
    )
}
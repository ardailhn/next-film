import Loading from "@/components/loading";
import styles from './styles.module.css';

export default function FeaturedMovieLoading() {
    return (
        <div style={{ height: 278 }} className={styles.movieWrapper}>
            <Loading />
        </div>
    )
}

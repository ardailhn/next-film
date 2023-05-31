import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';

export default function MoviesSection({ title, movies }: any) {
    return (
        <div className={styles.moviesSection}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.movies}>
                {movies.map((movie: any) => (
                    <div key={movie.id} className={styles.movie}>
                        <Link href={`/movie/${movie.id}`}>
                            <Image
                                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                alt={movie.title}
                                fill
                                unoptimized
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
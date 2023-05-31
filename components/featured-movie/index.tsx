import Link from 'next/link';
import styles from './styles.module.css';
import { FaPlus } from 'react-icons/fa';
import Image from 'next/image';

export default function FeaturedMovie({ movie = {}, isCompact = true }: any) {
    const { poster_path, title, overview }: any = movie;

    return (
        <div className={styles.movieWrapper}>
            <h1 className={styles.title}>{title}</h1>
            <p className={`${styles.overview} ${isCompact ? styles.shortOverview : ""}`}>
                {overview}
            </p>
            <div className={styles.actionButtons}>
                <Link className={styles.playButton} href={`/movie/${movie.id}`}>
                    Play
                </Link>
                <button aria-label='add-button' className={styles.addButton}>
                    <FaPlus />
                </button>
            </div>
            {!isCompact &&
                <div className={styles.videos}>
                    {movie.videos?.map((video: any) => (
                        <iframe
                            key={video.id}
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    ))}
                </div>
            }
            <div className={styles.moviePoster}>
                <div className={styles.moviePosterOverlay}></div>
                <Image unoptimized fill
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                />
            </div>
        </div>
    )
}

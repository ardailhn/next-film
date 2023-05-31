import Skeleton from '../skeleton';
import styles from './styles.module.css';

export default function CategoriesLoading() {
    return (
        <div className={styles.categories}>
            {Array(5).fill(0).map((_, index) => (
                <Skeleton key={index} height={72} />
            ))}
        </div>
    )
}

import Link from 'next/link';
import styles from './styles.module.css';

export default function Categories({ categories }: any) {
    return (
        <div className={styles.categories}>
            {categories.map((category: any) => (
                <Link
                    key={category.id}
                    href={`/category/${category.id}`}
                    className={styles.category}>
                    <div className={styles.name}>{category.name}</div>
                </Link>
            ))}
        </div>
    )
}

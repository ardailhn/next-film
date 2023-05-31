import styles from './styles.module.css';

export default function Skeleton({ width, height }: any) {
    return (
        <div className={styles.skeleton} style={{ width, height }}></div>
    )
}
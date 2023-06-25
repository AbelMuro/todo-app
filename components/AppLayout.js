import styles from '../styles/AppLayout.module.css';

export default function Layout({children}) {
    return(
        <main className={styles.container}>
            {children}
        </main>
    )
}
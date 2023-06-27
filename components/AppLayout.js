import {memo} from 'react';
import styles from '../styles/AppLayout.module.css';

const Layout = ({children}) => {
    return(
        <main className={styles.container}>
            {children}
        </main>
    )
}

export default memo(Layout);
import {useDispatch} from 'react-redux';
import Image from 'next/image';
import styles from '../../styles/Header/HeaderBar.module.css';

export default function HeaderBar() {
    const dispatch = useDispatch();

    const handleThemeSwitch = () => {
        dispatch({type: 'change theme'})
    }

    return(
        <header className={styles.container}>
            <h1 className={styles.title}>
                todo
            </h1>
            <Image src={'/Icons/icon-moon.svg'} 
                width='0'
                height='0'
                alt='theme switch icon'
                priority
                className={styles.themeIcon}
                onClick={handleThemeSwitch}
                />
        </header>
    )
}
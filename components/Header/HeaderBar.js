import {memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Image from 'next/image';
import styles from '../../styles/Header/HeaderBar.module.css';

const HeaderBar = () =>{
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme)

    const handleThemeSwitch = () => {
        dispatch({type: 'change theme'})
    }

    useEffect(() => {
        const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
        dispatch({type: 'initial theme', theme: isDarkTheme.matches});
    }, [])

    return(
        <header className={styles.container}>
            <h1 className={styles.title}>
                todo
            </h1>
            <Image src={theme ?'/Icons/icon-sun.svg' : '/Icons/icon-moon.svg'} 
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

export default memo(HeaderBar)
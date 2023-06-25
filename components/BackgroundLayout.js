import {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import styles from '../styles/BackgroundLayout.module.css';

export default function BackgroundLayout({children}) {
    const theme = useSelector(state => state.theme);
    const containerRef = useRef();

    useEffect(() => {
        if(theme){
            containerRef.current.style.backgroundImage = 'url(/Images/bg-desktop-dark.jpg)';
            containerRef.current.style.backgroundColor = '#171823';
        }
            
        else {
            containerRef.current.style.backgroundImage = 'url(/Images/bg-desktop-light.jpg)';
            containerRef.current.style.backgroundColor = '#FAFAFA';
        }
    }, [theme])

    return(
        <section className={styles.container} ref={containerRef}>
            {children}
        </section>
    )
}
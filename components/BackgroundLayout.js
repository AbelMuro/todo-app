import {useEffect, useRef} from 'react';
import useMediaQuery from '../hooks/useMediaQuery'
import {useSelector} from 'react-redux';
import styles from '../styles/BackgroundLayout.module.css';

export default function BackgroundLayout({children}) {
    const mobile = useMediaQuery('(max-width: 600px)')
    const theme = useSelector(state => state.theme);
    const containerRef = useRef();

    useEffect(() => {
        if(theme){
            containerRef.current.style.backgroundImage = mobile ? 'url(/Images/bg-mobile-dark.jpg)' : 'url(/Images/bg-desktop-dark.jpg)';
            containerRef.current.style.backgroundColor = '#171823';
        }
        else {
            containerRef.current.style.backgroundImage = mobile ? 'url(/Images/bg-mobile-light.jpg)' : 'url(/Images/bg-desktop-light.jpg)';
            containerRef.current.style.backgroundColor = '#FAFAFA';
        }
    }, [theme, mobile])

    return(
        <section className={styles.container} ref={containerRef}>
            {children}
        </section>
    )
}
import {useEffect} from 'react';
import styles from '../../styles/DisplayTodos/MobileFilterBar.module.css';

export default function MobileFilterBar({theme, filter, handleFilter, clearCompleted}) {

    const changeTheme = (currentClass) => {
        if(theme)
            return [currentClass, styles.dark].join(' ');
        else
            return [currentClass, styles.light].join(' ');
    }

    useEffect(() => {
        const allFilters = document.querySelectorAll('.' + styles.filterOption);
        allFilters.forEach((filter) => {
            filter.style.color = '';
        })
        allFilters.forEach((currentFilter) => {
            const filterName = currentFilter.getAttribute('data-filter');
            if(filterName === filter)
                currentFilter.style.color = '#3A7CFD';
        })  
    }, [filter])

    return(
        <footer className={changeTheme(styles.container)}>
            <div className={changeTheme(styles.clearContainer)}>
                <p className={changeTheme(styles.itemsLeft)}>
                    5 items left
                </p>
                <button className={changeTheme(styles.clearCompletedButton)} onClick={clearCompleted}>
                    Clear Completed
                </button>
            </div>
            <div className={changeTheme(styles.filterOptions)}>
                <button className={changeTheme(styles.filterOption)} data-filter='All' onClick={handleFilter}>
                    All
                </button>
                <button className={changeTheme(styles.filterOption)} data-filter='Active' onClick={handleFilter}>
                    Active
                </button>
                <button className={changeTheme(styles.filterOption)} data-filter='Completed' onClick={handleFilter}>
                    Completed
                </button>
            </div>
        </footer>
    )
}
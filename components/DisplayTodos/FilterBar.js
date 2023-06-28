import {useEffect, memo} from 'react'
import styles from '../../styles/DisplayTodos/FilterBar.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';
import MobileFilterBar from './MobileFilterBar';
import { useSelector, useDispatch } from 'react-redux';

const FilterBar = ({filter, setFilter}) => {
    const theme = useSelector(state => state.theme);
    const mobile = useMediaQuery('(max-width: 600px)');
    const dispatch = useDispatch();

    const handleFilter = (e) => {        
        const newFilter = e.target.getAttribute('data-filter');
        setFilter(newFilter);
    }

    const clearCompleted = () => {
        dispatch({type: 'clear todos'});
    }

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
    }, [filter, mobile])


    return mobile ? <MobileFilterBar theme={theme} filter={filter} setFilter={setFilter} handleFilter={handleFilter} clearCompleted={clearCompleted}/> :
        <footer className={changeTheme(styles.filterbar)}>
            <span className={changeTheme(styles.itemsLeft)}>
                5 items left
            </span>
            <div className={styles.filterOptions}>
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
            <button className={changeTheme(styles.clearCompleted)} onClick={clearCompleted}> 
                Clear Completed
            </button>
        </footer> 
    
}

export default memo(FilterBar);
import {useEffect, memo, useMemo} from 'react'
import styles from '../../styles/DisplayTodos/FilterBar.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';
import MobileFilterBar from './MobileFilterBar';
import { useSelector, useDispatch } from 'react-redux';

const FilterBar = () => {
    const theme = useSelector(state => state.theme);
    const allTodos = useSelector(state => state.list);
    const filter = useSelector(state => state.filter);
    const mobile = useMediaQuery('(max-width: 600px)');
    const dispatch = useDispatch();

    const handleFilter = (e) => {        
        const newFilter = e.target.getAttribute('data-filter');
        dispatch({type: 'change filter', filter: newFilter});
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

    const itemsLeft = useMemo(() => {
        return allTodos.reduce((acc, todo) => {
            if(!todo.completed)
                return acc + 1;
                else
                    return acc;
        }, 0)
    }, [allTodos])

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


    return mobile ? 
        <MobileFilterBar /> :
        <footer className={changeTheme(styles.filterbar)}>
            <span className={changeTheme(styles.itemsLeft)}>
                {itemsLeft ? `${itemsLeft} items left` : 'No items left'}
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
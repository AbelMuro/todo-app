import {useEffect, memo, useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/DisplayTodos/MobileFilterBar.module.css';

const MobileFilterBar = () => {
    const theme = useSelector(state => state.theme);
    const allTodos = useSelector(state => state.list);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const changeTheme = (currentClass) => {
        if(theme)
            return [currentClass, styles.dark].join(' ');
        else
            return [currentClass, styles.light].join(' ');
    }

    const handleFilter = (e) => {
        const newFilter = e.target.getAttribute('data-filter');
        dispatch({type: 'change filter', filter: newFilter})
    }

    const clearCompleted = () => {
        dispatch({type: 'clear todos'});
    }

    const itemsLeft = useMemo(() => {
        return allTodos.reduce((acc, items) => {
               if(!items.completed)
                   return acc + 1;
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
    }, [filter])

    return(
        <footer className={changeTheme(styles.container)}>
            <div className={changeTheme(styles.clearContainer)}>
                <p className={changeTheme(styles.itemsLeft)}>
                    {itemsLeft ? `${itemsLeft} items left` : 'No items left'}
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

export default memo(MobileFilterBar);
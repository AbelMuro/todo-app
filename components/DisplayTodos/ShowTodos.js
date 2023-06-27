import {useState, useMemo, useEffect, memo} from 'react';
import {v4 as uuid} from 'uuid';
import TodoContainer from './TodoContainer';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/DisplayTodos/ShowTodos.module.css';

//this is where i left off, i will need to make the filter bar responsive
const ShowTodos = () => {
    const [filter, setFilter] = useState('All');
    const dispatch = useDispatch();
    const allTodos = useSelector(state => state.list);
    const theme = useSelector(state => state.theme);

    const handleFilter = (e) => {
        if(!e.target.matches('.' + styles.filterOption)) return;
        const newFilter = e.target.getAttribute('data-filter');
        setFilter(newFilter);

    }

    const clearCompleted = (e) => {
        dispatch({type: 'clear todos'})
    }

    const changeTheme = (currentClass) => {
        if(theme)
            return [currentClass, styles.dark].join(' ');
        else
            return [currentClass, styles.light].join(' ');
    }

    const todosList = useMemo(() => {
        return allTodos.map(({task, completed}) => {
            if(filter === 'Active' && completed === false)
                return <TodoContainer task={task} completed={completed} key={uuid()}/>
            else if(filter === 'Completed' && completed === true)
                return <TodoContainer task={task} completed={completed} key={uuid()}/>
            else if(filter === 'All')
                return <TodoContainer task={task} completed={completed} key={uuid()}/>
        })
    }, [allTodos, filter])

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
        <section className={changeTheme(styles.container)}>
            {todosList}
            <div className={styles.filterbar}>
                <span className={changeTheme(styles.itemsLeft)}>
                    5 items left
                </span>
                <div className={styles.filterOptions} onClick={handleFilter}>
                    <button className={changeTheme(styles.filterOption)} data-filter='All'>
                        All
                    </button>
                    <button className={changeTheme(styles.filterOption)} data-filter='Active'>
                        Active
                    </button>
                    <button className={changeTheme(styles.filterOption)} data-filter='Completed'>
                        Completed
                    </button>                    
                </div>
                <button className={changeTheme(styles.clearCompleted)} onClick={clearCompleted}> 
                    Clear Completed
                </button>

            </div>
        </section>
    )
}

export default memo(ShowTodos);
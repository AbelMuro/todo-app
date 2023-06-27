import {useState, useMemo, useEffect} from 'react';
import Todo from './Todo'
import Image from 'next/image';
import {v4 as uuid} from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/DisplayTodos/ShowTodos.module.css';


export default function ShowTodos () {
    const [filter, setFilter] = useState('All');
    const dispatch = useDispatch();
    const allTodos = useSelector(state => state.list);
    const theme = useSelector(state => state.theme);

    const removeTodo = (e) => {
        const todo = e.target.getAttribute('data-todo');
        dispatch({type: 'remove todo', todo: todo});
    }

    const handleFilter = (e) => {
        if(!e.target.matches('.' + styles.filterOption)) return;
        const newFilter = e.target.getAttribute('data-filter');
        setFilter(newFilter);

    }

    const changeTheme = (currentClass) => {
        if(theme)
            return [currentClass, styles.dark].join(' ');
        else
            return [currentClass, styles.light].join(' ');
    }

    const changeSrc = () => {
        if(theme)
            return '/Icons/icon-cross-dark.svg';
        else
            return '/Icons/icon-cross-dark.svg';
    }


    const todosList = useMemo(() => {
        return allTodos.map(({task, completed}) => {
            return(
                <div className={changeTheme(styles.todoContainer)} key={uuid()}>
                    <Todo task={task} completed={completed}/>
                    <Image src={changeSrc()} 
                        width='0' height='0' 
                        alt='close icon' 
                        className={styles.closeIcon}
                        priority
                        data-todo={task}
                        onClick={removeTodo}
                        />
                </div>
            )
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
                <button className={styles.clearCompleted}> 
                    Clear Completed
                </button>

            </div>
        </section>
    )
}
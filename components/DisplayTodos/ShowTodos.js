import {useState, useMemo, memo} from 'react';
import {v4 as uuid} from 'uuid';
import TodoContainer from './TodoContainer';
import FilterBar from './FilterBar';
import { useSelector } from 'react-redux';
import styles from '../../styles/DisplayTodos/ShowTodos.module.css';

const ShowTodos = () => {
    const filter = useSelector(state => state.filter);
    const allTodos = useSelector(state => state.list);
    const theme = useSelector(state => state.theme);

    const todosList = useMemo(() => {
        return allTodos.map(({task, completed, id}, i) => {
            if(filter === 'Active' && completed === false)
                return <TodoContainer 
                    task={task} 
                    completed={completed}
                    todoId={id}
                    index={i}
                    key={id}/>
            else if(filter === 'Completed' && completed === true)
                return <TodoContainer 
                    task={task} 
                    completed={completed}
                    todoId={id}
                    index={i}
                    key={id}/>
            else if(filter === 'All')
                return <TodoContainer 
                    task={task} 
                    completed={completed}
                    todoId={id}
                    index={i}
                    key={id}/>
        })
    }, [allTodos, filter])

    return(
        <section className={theme ? 
            [styles.container, styles.dark].join(' ') : 
            [styles.container, styles.light].join(' ')}>             
                {todosList}                 
                {todosList.length ? <FilterBar/> : <></>}
        </section>
    )
}

export default memo(ShowTodos);
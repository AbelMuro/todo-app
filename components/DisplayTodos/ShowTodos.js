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
    const [currentDragItem, setCurrentDragItem] = useState('');

    const handleDrag = (e) => {
        setCurrentDragItem(e.currentTarget.id);
    }
    //this is the problem. handleDrop forms a closure with the previous state
    const handleDrop = (e) => {

        const dragBox = allTodos.find(todo => todo.id === dragItem)
        const dropBox = allTodos.find(todo => todo.id === e.currentTarget.id);

        console.log(dragBox, dropBox);
    }

    const todosList = useMemo(() => {
        return allTodos.map(({task, completed, id}) => {
            if(filter === 'Active' && completed === false)
                return <TodoContainer 
                    task={task} 
                    completed={completed}
                    id={id}
                    handleDrag={handleDrag}
                    handleDrop={handleDrop}
                     key={uuid()}/>
            else if(filter === 'Completed' && completed === true)
                return <TodoContainer 
                    task={task} 
                    completed={completed}
                    id={id}
                    handleDrag={handleDrag}
                    handleDrop={handleDrop}
                    key={uuid()}/>
            else if(filter === 'All')
                return <TodoContainer 
                    task={task} 
                    completed={completed}
                    id={id}
                    handleDrag={handleDrag}
                    handleDrop={handleDrop}
                    key={uuid()}/>
        })
    }, [allTodos, filter])

    return(
        <section className={theme ? 
            [styles.container, styles.dark].join(' ') : 
            [styles.container, styles.light].join(' ')}>             
                {todosList}                 
                <FilterBar/>
        </section>
    )
}

export default memo(ShowTodos);
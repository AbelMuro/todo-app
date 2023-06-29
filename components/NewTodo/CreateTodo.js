import Input from './input';
import {v4 as uuid} from 'uuid';
import {useRef, memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from '../../styles/NewTodo/CreateTodo.module.css';

const CreateTodo = () => {  
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    const allTodos = useSelector(state => state.list);
    const containerRef = useRef();
    const newTodo = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskToAdd = newTodo.current.state;
        dispatch({type: 'add todo', todo: {task: taskToAdd, completed: false, id: uuid(), order: allTodos.length + 1}})
        newTodo.current.resetState();
    }

    return(
        <form className={theme ? 
            [styles.container, styles.dark].join(' ') : 
            [styles.container, styles.light].join(' ')} 
            ref={containerRef}
            onSubmit={handleSubmit}>
                <span className={theme ? 
                    [styles.circle, styles.dark].join(' ') : 
                    [styles.circle, styles.light].join(' ')
                }></span>
                <Input ref={newTodo} theme={theme}/>
        </form>
    )
}

export default memo(CreateTodo);
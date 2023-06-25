import Input from './input';
import {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from '../../styles/NewTodo/CreateTodo.module.css';

export default function CreateTodo() {  
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    const containerRef = useRef();
    const newTodo = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskToAdd = newTodo.current.state;
        dispatch({type: 'add todo', todo: {task: taskToAdd, completed: false}})
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
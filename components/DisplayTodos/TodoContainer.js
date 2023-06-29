import Todo from './Todo'
import Image from 'next/image';
import { useSelector, useDispatch} from 'react-redux';
import styles from '../../styles/DisplayTodos/TodoContainer.module.css'

export default function TodoContainer({task, completed, id, handleDrag, handleDrop}) {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const removeTodo = (e) => {
        const todo = e.target.getAttribute('data-todo');
        dispatch({type: 'remove todo', todo: todo});
    }


     return(
        <div className={theme ? 
            [styles.todoContainer, styles.dark].join(' ') : 
            [styles.todoContainer, styles.light].join(' ')}
            draggable={true}
            id={id}
            onDragOver={(e) => {e.preventDefault()}}
            onDragStart={handleDrag}
            onDrop={handleDrop}
            >
            <Todo task={task} completed={completed}/>
            <Image src={theme ? '/Icons/icon-cross-dark.svg' : '/Icons/icon-cross-dark.svg'} 
                width='0' height='0' 
                alt='close icon' 
                className={styles.closeIcon}
                priority
                data-todo={task}
                onClick={removeTodo}
                />
        </div>
     )
}
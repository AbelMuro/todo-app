import Todo from './Todo'
import Image from 'next/image';
import {useRef} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {useDrop, useDrag} from 'react-dnd';
import styles from '../../styles/DisplayTodos/TodoContainer.module.css'

export default function TodoContainer({task, completed, todoId ,index}) {
    const theme = useSelector(state => state.theme);
    const todoRef = useRef(null);
    const dispatch = useDispatch();

    const [{handlerId}, drop] = useDrop({
        accept: 'todo',

        collect: (monitor) => ({
            handlerId: monitor.getHandlerId()
        }),
        hover: (item, monitor) => {             //hover function will receive the todo that is being dragged ON TOP of the current todo
            if(!todoRef.current) return;

            const dragIndex = item.index;        //index of the item being dragged
            const hoverIndex = index;            //index of the item being hovered 

            if(dragIndex === hoverIndex) return;

            const hoverBoundingRect = todoRef.current.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return
            
            dispatch({type: 'switch todos', dragTodoIndex: dragIndex, dropTodoIndex: hoverIndex});
            item.index = hoverIndex;
        }
    })

    const [{isDragging}, drag] = useDrag({
        type: 'todo',
        item: () => {                           //this is the function that will return data about the item that is currently being dragged
            return {index, todoId}
        },
        isDragging: (monitor) => {
            return todoId === monitor.getItem().todoId;
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    })

    const removeTodo = (e) => {
        const todo = e.target.getAttribute('data-todo');
        dispatch({type: 'remove todo', todo: todo});
    }

    drag(drop(todoRef));
    
     return(
        <div className={theme ? 
            [styles.todoContainer, styles.dark].join(' ') : 
            [styles.todoContainer, styles.light].join(' ')}
            ref={todoRef}
            data-handler-id={handlerId}
            style={isDragging ? {opacity: 0} : {opacity: 1}}
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
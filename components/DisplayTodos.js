import Image from 'next/image';
import {v4 as uuid} from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/DisplayTodos.module.css';


//this is where i left off, i will need to implement a component that will filter out certain todos
//also dont forget to style the labels when the radio button is checked
export default function DisplayTodos () {
    const dispatch = useDispatch();
    const allTodos = useSelector(state => state.list);
    const theme = useSelector(state => state.theme);

    const removeTodo = (e) => {
        const todo = e.target.getAttribute('data-todo');
        dispatch({type: 'remove todo', todo: todo});
    }

    const removeCheckMark = (e) => {
        const checkBox = e.target.previousElementSibling;
        checkBox.checked = false;
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

    return(
        <section className={changeTheme(styles.container)}>
            {allTodos.map(({task, completed}) => {
                const radioButtonID = uuid();
                return(
                    <div className={changeTheme(styles.todoContainer)} key={uuid()}>
                        <fieldset className={changeTheme(styles.radioButtonContainer)}>
                            <input type='radio' className={changeTheme(styles.radioButton)} id={radioButtonID}/>
                            <Image src={'/Icons/checked-mark.svg'} 
                                width='0' height='0'
                                alt='check mark'
                                className={styles.checkMark}
                                priority
                                onClick={removeCheckMark}
                                />                            
                        </fieldset>
                        <label className={changeTheme(styles.todo)} htmlFor={radioButtonID}>
                            {task}
                        </label>
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
            })}

            <></>
        </section>
    )
}
import Image from 'next/image';
import { useSelector } from 'react-redux';
import styles from '../styles/DisplayTodos.module.css';

export default function DisplayTodos () {
    const allTodos = useSelector(state => state.list);
    const theme = useSelector(state => state.theme);

    const handleClick = (e) => {
        const checkBox = e.target.previousElementSibling;
        checkBox.checked = false;
    }

    const changeTheme = (currentClass) => {
        if(theme)
            return [currentClass, styles.dark].join(' ');
        else
            return [currentClass, styles.light].join(' ');
    }

    return(
        <section className={changeTheme(styles.container)}>
            {allTodos.map(({task, completed}) => {
                return(
                    <div className={styles.todoContainer} key={task}>
                        <fieldset className={changeTheme(styles.checkboxContainer)}>
                            <input type='checkbox' className={changeTheme(styles.checkBox)}/>
                            <Image src={'/Icons/checked-mark.svg'} 
                                width='0' height='0'
                                alt='check mark'
                                className={styles.checkMark}
                                priority
                                onClick={handleClick}
                                />                            
                        </fieldset>
                        <label className={styles.todo}>
                            {task}
                        </label>
                    </div>
                )
            })}
        </section>
    )
}
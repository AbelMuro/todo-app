import {useState, useEffect, useRef, useId, forwardRef, useImperativeHandle} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import styles from '../../styles/DisplayTodos/Todo.module.css';

export default function Todo({task, completed}) {
    const [checked, setChecked] = useState(completed);
    const dispatch = useDispatch();
    const labelRef = useRef();
    const skipFirstRender = useRef(true);
    const theme = useSelector(state => state.theme);

    const changeTheme = (currentClass) => {
        if(theme)
            return [currentClass, styles.dark].join(' ');
        else
            return [currentClass, styles.light].join(' ');
    }

    const handleChecked = () => {
        setChecked(!checked);
    }

    useEffect(() => {
        if(checked){
            labelRef.current.style.textDecoration = 'line-through';
            labelRef.current.style.color = theme ? '#4D5067' : '#D1D2DA';
        }

        else {
            labelRef.current.style.textDecoration = '';
            labelRef.current.style.color = '';
        }
    }, [checked, theme])
    

    useEffect(() => {
        if(skipFirstRender.current){
            skipFirstRender.current = false;
            return;
        }
        dispatch({type: 'update todo', todo: {task, completed: checked}})
    }, [checked])

    return (
        <>
            <fieldset className={changeTheme(styles.checkBoxContainer)}>
                <div className={changeTheme(styles.checkBox)} onClick={handleChecked}></div>
                {checked ? <Image src={'/Icons/checked-mark.svg'} 
                    width='0' height='0'
                    alt='check mark'
                    className={styles.checkMark}
                    priority
                    onClick={handleChecked}
                    /> : <></>}                            
            </fieldset>   
            <label className={changeTheme(styles.todo)} ref={labelRef} onClick={handleChecked}>
                {task}
            </label>    
        </>

    )
}

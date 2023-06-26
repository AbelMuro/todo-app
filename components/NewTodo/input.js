import {useState, useRef, forwardRef, useImperativeHandle, memo} from 'react';
import {useSelector} from 'react-redux';
import styles from '../../styles/NewTodo/Input.module.css';

const Input = forwardRef(({theme}, ref) => { 
    const [todo, setTodo] = useState('');
    const errorMessageRef = useRef();

    const handleChange = (e) => {
        setTodo(e.target.value)
    }


    useImperativeHandle(ref, () => ({
        get state(){
            return todo;
        },
        resetState(){
            setTodo('');
        }
    }))

    return(
        <fieldset className={styles.container}>
            <input type='text' 
                value={todo}
                onChange={handleChange}
                className={theme ? 
                    [styles.input, styles.dark].join(' ') : 
                    [styles.input, styles.light].join(' ')} 
                placeholder='Create a new todo...'
                required
                />   
            <div className={styles.errorMessage} ref={errorMessageRef}>
                Can't be empty
            </div>         
        </fieldset>
    )
})

export default memo(Input);
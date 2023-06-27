import {useState, useRef, forwardRef, useImperativeHandle, memo} from 'react';
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
        <input type='text' 
            value={todo}
            onChange={handleChange}
            className={theme ? 
                [styles.input, styles.dark].join(' ') : 
                [styles.input, styles.light].join(' ')} 
            placeholder='Create a new todo...'
            required
            />         
    )
})

export default memo(Input);
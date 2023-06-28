import {useSelector} from 'react-redux';
import styles from '../styles/DragDropMessage.module.css';

export default function DragDropMessage() {
    const theme = useSelector(state => state.theme);

    return(
        <p className={theme ? 
            [styles.message, styles.dark].join(' ') : 
            [styles.message, styles.light].join(' ')}>
            Drag and drop to reorder list
        </p>
    )
}
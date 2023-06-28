import HeaderBar from '../components/Header/HeaderBar'
import CreateTodo from '../components/NewTodo/CreateTodo';
import ShowTodos from '../components/DisplayTodos/ShowTodos';
import AppLayout from '../components/AppLayout';
import DragDropMessage from '../components/DragDropMessage';

export default function Home({theme}) {

    return(
        <AppLayout>
            <HeaderBar/>
            <CreateTodo/>
            <ShowTodos/>
            <DragDropMessage/>
        </AppLayout>
    )
}

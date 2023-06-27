import HeaderBar from '../components/Header/HeaderBar'
import CreateTodo from '../components/NewTodo/CreateTodo';
import ShowTodos from '../components/DisplayTodos/ShowTodos';
import AppLayout from '../components/AppLayout';

export default function Home() {
    return(
        <AppLayout>
            <HeaderBar/>
            <CreateTodo/>
            <ShowTodos/>
        </AppLayout>
    )
}
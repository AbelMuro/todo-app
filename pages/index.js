import HeaderBar from '../components/Header/HeaderBar'
import CreateTodo from '../components/NewTodo/CreateTodo';
import DisplayTodos from '../components/DisplayTodos';
import AppLayout from '../components/AppLayout';

export default function Home() {
    return(
        <AppLayout>
            <HeaderBar/>
            <CreateTodo/>
            <DisplayTodos/>
        </AppLayout>
    )
}
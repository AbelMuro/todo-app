import HeaderBar from '../components/Header/HeaderBar'
import CreateTodo from '../components/NewTodo/CreateTodo';
import ShowTodos from '../components/DisplayTodos/ShowTodos';
import AppLayout from '../components/AppLayout';
import DragDropMessage from '../components/DragDropMessage';
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

export default function Home() {

    return(
        <AppLayout>
            <PreLoadImages/>
            <HeaderBar/>
            <CreateTodo/>
            <DndProvider backend={HTML5Backend}>   
                <ShowTodos/>
            </DndProvider>   
            <DragDropMessage/>
        </AppLayout>
    )
}

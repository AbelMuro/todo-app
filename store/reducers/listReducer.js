export default function listReducer(list = [], action) {
    switch(action.type){
        case 'add todo':
            const addTodo = action.todo.task;
            const filteredList = list.filter((todo) => {        //just in case the user adds a duplicate todo
                if(todo.task === addTodo)
                    return false;
                else
                    return true;
            })
            return [...filteredList, action.todo, ];
        case 'remove todo': 
            const taskToRemove = action.todo
            return list.filter((todo) => {
                if(todo.task === taskToRemove)
                    return false;
                else
                    return true;
            })
        case 'update todo': 
            const task = action.todo.task;
            const completed = action.todo.completed;      
            return list.map((todo) => {
                if(todo.task === task)
                    return {...todo, completed: completed}
                else
                    return todo;
            })
        case 'clear todos':
            return list.filter((todo) => {
                if(todo.completed)
                    return false;
                else
                    return true;
            }) 
        case 'switch todos': 
            const dragTodoIndex = action.dragTodoIndex;
            const dropTodoIndex = action.dropTodoIndex;
            const tempArray = [...list];
            let temp = tempArray[dragTodoIndex];
            tempArray[dragTodoIndex] = tempArray[dropTodoIndex];
            tempArray[dropTodoIndex] = temp;
            return tempArray;

        default:
            return list;
    }
}
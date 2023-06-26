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
            return [action.todo, ...filteredList];
        case 'remove todo': 
            const taskToRemove = action.todo
            return list.filter((todo) => {
                if(todo.task === taskToRemove)
                    return false;
                else
                    return true;
            })
        default:
            return list;
    }
}
export default function listReducer(list = [], action) {
    switch(action.type){
        case 'add todo':
            return [...list, action.todo];
        case 'remove todo': 
            const taskToRemove = action.todo.task
            return list.filter((todo) => {
                if(todo.task === taskToRemove)
                    return true;
                else
                    return false;
            })
        default:
            return list;
    }
}
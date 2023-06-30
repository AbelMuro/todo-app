export default function dragItemReducer(dragItemId = '', action){
    switch(action.type){
        case 'change dragged item':
            return action.dragItemId; 
        default: 
            return dragItemId;
    }
}
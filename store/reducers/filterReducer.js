export default function filterReducer(filter = 'All', action) {
    switch(action.type){
        case 'change filter':
            return action.filter;
        default:
            return filter; 
    }
}
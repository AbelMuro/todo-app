// false means that the theme will be light
// true means that the theme will be dark

export default function themeReducer(theme = false, action) {
    switch(action.type){
        case 'change theme':
            return !theme;
        default:
            return theme;
    }
}
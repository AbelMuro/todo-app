import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import listReducer from './reducers/listReducer';
import themeReducer from './reducers/themeReducer'

const rootReducer = combineReducers({
    list: listReducer,
    theme: themeReducer
})

const store = configureStore({                      //this will create the store with a reducer
    reducer: rootReducer
})

export default store;
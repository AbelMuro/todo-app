import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import listReducer from './reducers/listReducer';
import themeReducer from './reducers/themeReducer';
import filterReducer from './reducers/filterReducer';
import {                
    persistStore,                                                                  
    persistReducer,   
    FLUSH,                                                                          
    REHYDRATE,                                                                    
    PAUSE,                                                                          
    PERSIST,                                                                       
    PURGE,                                                                         
    REGISTER                                                              
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';                                    //using the local storage to store the state

const rootReducer = combineReducers({
    list: listReducer,
    theme: themeReducer,
    filter: filterReducer,
})

const persistedReducer = persistReducer({key: 'root', storage}, rootReducer);

const store = configureStore({                      //this will create the store with a reducer
    reducer: persistedReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware({serializableCheck: {ignoredActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})
})

export const persistedStore = persistStore(store);

export default store
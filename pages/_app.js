import BackgroundLayout from '../components/BackgroundLayout';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistedStore} from '../store/store';
import '../styles/global/styles.css';

export default function MyApp({Component, pageProps}) {
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                <BackgroundLayout>
                    <Component {...pageProps}/>            
                </BackgroundLayout>                   
            </PersistGate>
        </Provider>
    )
}
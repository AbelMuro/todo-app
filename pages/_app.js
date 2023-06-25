import BackgroundLayout from '../components/BackgroundLayout';
import {Provider} from 'react-redux';
import store from '../store/store';
import '../styles/global/styles.css';

export default function MyApp({Component, pageProps}) {
    return(
        <Provider store={store}>
            <BackgroundLayout>
                <Component {...pageProps}/>            
            </BackgroundLayout>            
        </Provider>
    )
}
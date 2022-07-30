import '../styles/globals.css'
import PreHeader from "../components/preHeader";
import Navbar from "../components/navbar";
import store from '../store'
import {Provider} from 'react-redux'
import {SessionProvider} from "next-auth/react";

function MyApp({Component, pageProps}) {
    return (
        <SessionProvider session={pageProps.session}>
            <Provider store={store}>
                <PreHeader/><Navbar/><Component {...pageProps} ></Component>
            </Provider>
    </SessionProvider>
    )
}

export default MyApp

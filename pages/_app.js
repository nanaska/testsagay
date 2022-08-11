import '../styles/globals.css'
import PreHeader from "../components/preHeader";
import Navbar from "../components/navbar";
import store from '../store'
import {Provider} from 'react-redux'
import {ChakraProvider, Container} from '@chakra-ui/react'

function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider>
            <Provider store={store}>
                <Container maxWidth={1920}>
                    <PreHeader/>
                    <Navbar/>
                </Container>
                <Component {...pageProps} ></Component>
            </Provider>
        </ChakraProvider>
    )
}

export default MyApp

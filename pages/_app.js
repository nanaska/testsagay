import '../styles/globals.css'
import PreHeader from "../components/preHeader";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return <><PreHeader/><Navbar/><Component {...pageProps} ></Component></>
}

export default MyApp

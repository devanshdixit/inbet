import { AuthProvider } from '../Components/Firebase/authContext';
import '../styles/globals.css'
import { ThemeProvider } from '../utils/ThemeContext';


function MyApp({ Component, pageProps }) {
  return <ThemeProvider><AuthProvider><Component {...pageProps} /></AuthProvider></ThemeProvider >;
}

export default MyApp
